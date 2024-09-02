/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import * as MockSearchRoundTripFocused from '../util/mockApi/search-roundtrip-focused.json';
import * as MockSearchRoundTripUnfocusedAnytimeOnly from '../util/mockApi/search-roundtrip-unfocused-anytime-only.json';
import * as MockSearchRoundTripUnfocusedAnywhereAnytime from '../util/mockApi/search-roundtrip-unfocused-anywhere-anytime.json';
import * as MockSearchRoundTripUnfocusedAnywhereFixedDate from '../util/mockApi/search-roundtrip-unfocused-anywhere-fixed-date.json';
import { SearchFocusedRoundTripDto } from './dto/search-focused-round-trip.dto';
import { SearchUnfocusedRoundTripDto } from './dto/search-unfocused-round-trip.dto';
import { I_FlightQuote, I_GeneralFlightSearch, I_Itinerary, I_SearchFocusedRoundTripRes, I_SearchUnfocusedRoundTripRes, I_UnfocusedRoundTripTypes, IE_SkyScannerSearchRoundTrip, IE_SkyScannerSearchRoundTripFocused, IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly, IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime, IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime } from './flight.type';

@Injectable()
export class FlightService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    /**
     * Checks for type of search query used and determines its process type(focused/unfocused-anytime/unfocused-anywhere/unfocused-anywhere-anytime).
     * 
     * @param {string} toEntityId 
     * @param {string} departDate 
     * @param {string} returnDate 
     * @returns {I_UnfocusedRoundTripTypes} focused / unfocused-anytime / unfocused-anywhere / unfocused-anywhere-anytime
     */
    determineSkyScannerSearchRoundTripResponseType({ toEntityId, departDate, returnDate }: SearchFocusedRoundTripDto | SearchUnfocusedRoundTripDto): I_UnfocusedRoundTripTypes {
        let situation: I_UnfocusedRoundTripTypes
        const dateIsPresent = departDate && returnDate
        if (toEntityId && dateIsPresent) {
            situation = "focused";
        } else if (toEntityId && !dateIsPresent) {
            situation = "unfocused-anytime";
        } else if (!toEntityId && dateIsPresent) {
            situation = "unfocused-anywhere"
        } else if (!toEntityId && !dateIsPresent) {
            situation = "unfocused-anywhere-anytime";
        } else {
            throw new Error("Invalid parameters, please check your input to match searchUnfocusedRoundTrip's query format");
        }
        return situation
    }

    /**
     * Calls sky scanner search round trip API in RapidAPI. This function can return actual API response or mock API response depending on the environment used.
     * @param {string} fromEntityId 
     * @param {string} toEntityId 
     * @param {string} departDate 
     * @param {string} returnDate 
     * @returns IE_SkyScannerSearchRoundTrip
     */
    async skyScannerSearchRoundTrip(query: SearchFocusedRoundTripDto | SearchUnfocusedRoundTripDto): Promise<IE_SkyScannerSearchRoundTrip> {
        if (process.env.NODE_ENV === 'DEV') {
            const situation = this.determineSkyScannerSearchRoundTripResponseType(query)

            switch (situation) {
                case "focused":
                    return MockSearchRoundTripFocused as IE_SkyScannerSearchRoundTripFocused
                case "unfocused-anytime":
                    return MockSearchRoundTripUnfocusedAnytimeOnly as IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly
                case "unfocused-anywhere":
                    return MockSearchRoundTripUnfocusedAnywhereFixedDate as IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime
                case "unfocused-anywhere-anytime":
                    return MockSearchRoundTripUnfocusedAnywhereAnytime as IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime
            }
        } else if (process.env.NODE_ENV === 'TEST') {
            const response = await firstValueFrom(this.httpService.get("https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip", {
                headers: {
                    "Content-Type": "application/ json",
                    "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
                    "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com"
                },
                params: {
                    fromEntityId: query.fromEntityId,
                    toEntityId: query.toEntityId,
                    departDate: query.departDate,
                    returnDate: query.returnDate
                }
            }))
            return response.data
        }
    }

    /**
     * Handles focused trip search. Will return mock API response or actual API response depending on the environment used.
     * Result is by default set to sort ascendingly, and this can be changed by the priceSort parameter.
     * 
     * note: fromEntityId, toEntityId, departDate, returnDate must be provided.  
     * @param {string} fromEntityId 
     * @param {string} toEntityId 
     * @param {string} departDate 
     * @param {string} returnDate 
     * @param {"ASC" | "DESC"} priceSort - ASC or DESC
     * @returns I_SearchFocusedRoundTripRes
     */
    async searchFocusedRoundTrip({ fromEntityId, toEntityId, departDate, returnDate, priceSort = "ASC" }: SearchFocusedRoundTripDto): Promise<I_SearchFocusedRoundTripRes> {
        let res
        if (process.env.NODE_ENV === 'DEV') {
            res = await this.skyScannerSearchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate })
        } else if (process.env.NODE_ENV === 'TEST') {
            res = await this.skyScannerSearchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate })
        }
        // Focused Trip Search
        const focusedRes = res as IE_SkyScannerSearchRoundTripFocused
        const sortedItinerararies = focusedRes.data.itineraries.sort((a, b) => {
            if (!b?.price || !a?.price) return
            if (priceSort === 'DESC') {
                return b.price.raw - a.price.raw
            } else {
                return a.price.raw - b.price.raw
            }
        })
        const result = sortedItinerararies.map(item => {
            return {
                id: item.id,
                price: item.price,
                trips: item.legs.map(leg => {
                    return {
                        id: leg.id,
                        origin: {
                            id: leg.origin.id,
                            name: leg.origin.name,
                            displayCode: leg.origin.displayCode,
                            city: leg.origin.city,
                            country: leg.origin.country
                        },
                        destination: {
                            id: leg.destination.id,
                            name: leg.destination.name,
                            displayCode: leg.destination.displayCode,
                            city: leg.destination.city,
                            country: leg.destination.country
                        },
                        durationInMinutes: leg.durationInMinutes,
                        stopCount: leg.stopCount,
                        departureDate: leg.departure,
                        arrivalDate: leg.arrival
                    }
                })
            } as I_Itinerary
        })

        return {
            itineraries: result
        }

    }

    /**
     * Handles unfocused trip search. Can handle empty toEntityId and empty dates to return unfocused search result. 
     * Will return mock API response or actual API response depending on the environment used.
     * Result is by default set to sort ascendingly, and this can be changed by the priceSort parameter.
     * If groupByWeekends is true, it will group results by weekend and weekday.
     * 
     * note: fromEntityId must be provided.
     * groupByWeekends is only available for unfocused-anytime scenario
     * @param {string} fromEntityId 
     * @param {string} toEntityId 
     * @param {string} departDate 
     * @param {string} returnDate 
     * @param {"ASC" | "DESC"} priceSort - ASC or DESC
     * @param {boolean} groupByWeekends
     * @returns I_SearchUnfocusedRoundTripRes
     */
    async searchUnfocusedRoundTrip({ fromEntityId, toEntityId, departDate, returnDate, priceSort = "ASC", groupByWeekends = false }: SearchUnfocusedRoundTripDto): Promise<I_SearchUnfocusedRoundTripRes> {
        let result: any
        let groupedResult: any

        const situation = this.determineSkyScannerSearchRoundTripResponseType({ fromEntityId, toEntityId, departDate, returnDate })

        // Unfocused trip search of (without destination) and (without destination or date) does not have date in data, so grouping by week is impossible
        if ((situation === 'unfocused-anywhere' || situation === 'unfocused-anywhere-anytime') && groupByWeekends) {
            throw new Error("Invalid parameters, unfocused search with fixed date cannot carry out group by weekend function")
        }

        let res
        if (process.env.NODE_ENV === 'DEV') {
            res = await this.skyScannerSearchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate })
        } else if (process.env.NODE_ENV === 'TEST') {
            res = await this.skyScannerSearchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate })
        }

        if (situation === 'unfocused-anytime') {
            const unfocusedRes = res as IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly
            const sortedItinerararies = unfocusedRes.data.flightQuotes.results.sort((a, b) => {
                if (!a?.content || !b?.content) return
                if (priceSort === 'DESC') {
                    return b.content.rawPrice - a.content.rawPrice
                } else {
                    return a.content.rawPrice - b.content.rawPrice
                }
            })
            result = sortedItinerararies.map(item => {
                return {
                    id: item.id,
                    price: {
                        raw: item.content.rawPrice,
                        formatted: item.content.price,
                    },
                    trips: [
                        {
                            departureDate: item.content.outboundLeg.localDepartureDate,
                            origin: {
                                id: item.content.outboundLeg.originAirport.id,
                                name: item.content.outboundLeg.originAirport.name,
                                displayCode: item.content.outboundLeg.originAirport.skyCode
                            },
                            destination: {
                                id: item.content.outboundLeg.destinationAirport.id,
                                name: item.content.outboundLeg.destinationAirport.name,
                                displayCode: item.content.outboundLeg.destinationAirport.skyCode
                            }
                        },
                        {
                            departureDate: item.content.inboundLeg.localDepartureDate,
                            origin: {
                                id: item.content.inboundLeg.originAirport.id,
                                name: item.content.inboundLeg.originAirport.name,
                                displayCode: item.content.inboundLeg.originAirport.skyCode
                            },
                            destination: {
                                id: item.content.inboundLeg.destinationAirport.id,
                                name: item.content.inboundLeg.destinationAirport.name,
                                displayCode: item.content.inboundLeg.destinationAirport.skyCode
                            }
                        }
                    ]

                } as I_FlightQuote
            })
            if (groupByWeekends) {
                groupedResult = result.reduce((acc, item: I_FlightQuote) => {
                    if (!item?.trips) return acc
                    const departureDate = new Date(item.trips[0].departureDate)
                    if (departureDate.getDay() === 6 || departureDate.getDay() === 0) {
                        acc.weekends.push(item)
                    } else {
                        acc.weekdays.push(item)
                    }
                    return acc
                }, {
                    weekends: [],
                    weekdays: []
                })
            }
        } else if (situation === 'unfocused-anywhere') {
            const unfocusedRes = res as IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime
            const sortedItinerararies = unfocusedRes.data.everywhereDestination.results.sort((a, b) => {
                if (!a?.content.flightQuotes || !b?.content.flightQuotes) return
                if (priceSort === 'DESC') {
                    return b.content.flightQuotes.cheapest.rawPrice - a.content.flightQuotes.cheapest.rawPrice
                } else {
                    return a.content.flightQuotes.cheapest.rawPrice - b.content.flightQuotes.cheapest.rawPrice
                };
            });
            result = sortedItinerararies.map(item => {
                if (!item?.content?.flightQuotes) return
                return {
                    id: item.id,
                    price: {
                        raw: item.content.flightQuotes.cheapest.rawPrice,
                        formatted: item.content.flightQuotes.cheapest.price
                    },
                    location: {
                        id: item.content.location.id,
                        skyCode: item.content.location.skyCode,
                        name: item.content.location.name
                    }
                } as I_GeneralFlightSearch
            })
        } else if (situation === 'unfocused-anywhere-anytime') {
            const unfocusedRes = res as IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime
            const sortedItinerararies = unfocusedRes.data.everywhereDestination.results.sort((a, b) => {
                if (!a?.content?.flightQuotes || !b?.content?.flightQuotes) return
                if (priceSort === 'DESC') {
                    return b.content.flightQuotes.cheapest.rawPrice - a.content.flightQuotes.cheapest.rawPrice
                } else {
                    return a.content.flightQuotes.cheapest.rawPrice - b.content.flightQuotes.cheapest.rawPrice
                };
            });
            result = sortedItinerararies.map(item => {
                if (!item?.content?.flightQuotes) return
                return {
                    id: item.id,
                    price: {
                        raw: item.content.flightQuotes.cheapest.rawPrice,
                        formatted: item.content.flightQuotes.cheapest.price
                    },
                    location: {
                        id: item.content.location.id,
                        skyCode: item.content.location.skyCode,
                        name: item.content.location.name
                    }
                } as I_GeneralFlightSearch
            })
        }

        if (groupByWeekends) {
            return {
                responseType: situation,
                groupedResult
            }
        } else {
            return {
                responseType: situation,
                itineraries: result
            }
        }
    }
}
