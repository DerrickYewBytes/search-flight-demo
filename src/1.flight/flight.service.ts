/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { I_Itinerary, I_SearchRoundTripReq, I_SearchRoundTripRes, I_SearchUnfocusedRoundTripReq, IE_SkyScannerSearchRoundTrip, IE_SkyScannerSearchRoundTripFocused, IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly, IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime, IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime } from './flight.type';
import { HttpService } from '@nestjs/axios';
import * as MockSearchRoundTripFocused from '../util/mockApi/search-roundtrip-focused.json';
import * as MockSearchRoundTripUnfocusedAnywhereAnytime from '../util/mockApi/search-roundtrip-unfocused-anywhere-anytime.json';
import * as MockSearchRoundTripUnfocusedAnytimeOnly from '../util/mockApi/search-roundtrip-unfocused-anytime-only.json';
import * as MockSearchRoundTripUnfocusedAnywhereFixedDate from '../util/mockApi/search-roundtrip-unfocused-anywhere-fixed-date.json';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class FlightService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    determineSkyScannerSearchRoundTripResponseType({ toEntityId, departDate, returnDate }: I_SearchRoundTripReq | I_SearchUnfocusedRoundTripReq): "focused" | "unfocused-anytime" | "unfocused-anywhere" | "unfocused-anywhere-anytime" {
        let situation: "focused" | "unfocused-anytime" | "unfocused-anywhere" | "unfocused-anywhere-anytime"
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

    async mockSkyScannerSearchRoundTrip(params: I_SearchRoundTripReq | I_SearchUnfocusedRoundTripReq): Promise<IE_SkyScannerSearchRoundTrip> {
        const situation = this.determineSkyScannerSearchRoundTripResponseType(params)

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

    }

    async realSkyScannerSearchRoundTrip(param: I_SearchRoundTripReq): Promise<IE_SkyScannerSearchRoundTrip> {
        const response = await firstValueFrom(this.httpService.get("https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip", {
            headers: {
                "Content-Type": "application/ json",
                "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
                "X-RapidAPI-Host": "sky-scanner3.p.rapidapi.com"
            },
            params: {
                fromEntityId: param.fromEntityId,
                toEntityId: param.toEntityId,
                departDate: param.departDate,
                returnDate: param.returnDate
            }
        }))
        return response.data
    }

    async searchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate, priceSort = "ASC" }: I_SearchRoundTripReq): Promise<I_SearchRoundTripRes> {
        const res = await this.mockSkyScannerSearchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate })
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

    async searchUnfocusedRoundTrip({ fromEntityId, toEntityId, departDate, returnDate, priceSort = "ASC", groupByWeekends = false }: I_SearchUnfocusedRoundTripReq): Promise<any> {
        let result: any
        let groupedResult: any
        let unfocusedRes
        let sortedItinerararies

        const situation = this.determineSkyScannerSearchRoundTripResponseType({ fromEntityId, toEntityId, departDate, returnDate })

        // Unfocused trip search of (without destination) and (without destination or date) does not have date in data, so grouping by week is impossible
        if ((situation === 'unfocused-anywhere' || situation === 'unfocused-anywhere-anytime') && groupByWeekends) {
            throw new Error("Invalid parameters, unfocused search with fixed date cannot carry out group by weekend function")
        }

        const res = await this.mockSkyScannerSearchRoundTrip({ fromEntityId, toEntityId, departDate, returnDate })

        switch (situation) {
            case "unfocused-anytime":
                unfocusedRes = res as IE_SkyScannerSearchRoundTripUnfocusedAnytimeOnly
                sortedItinerararies = unfocusedRes.data.flightQuotes.results.sort((a, b) => {
                    if (!a?.content || !b?.content) return
                    if (priceSort === 'DESC') {
                        return b.content.rawPrice - a.content.rawPrice
                    } else {
                        return a.content.rawPrice - b.content.rawPrice
                    }
                })
                result = sortedItinerararies.map(itinerary => {
                    return itinerary
                })
                if (groupByWeekends) {
                    groupedResult = result.reduce((acc, item) => {
                        if (!item?.content) return acc
                        const departureDate = new Date(item.content.outboundLeg.localDepartureDate)
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
                break;
            case "unfocused-anywhere":
                unfocusedRes = res as IE_SkyScannerSearchRoundTripUnfocusedAnywhereFixedTime
                sortedItinerararies = unfocusedRes.data.everywhereDestination.results.sort((a, b) => {
                    if (!a?.content.flightQuotes || !b?.content.flightQuotes) return
                    if (priceSort === 'DESC') {
                        return b.content.flightQuotes.cheapest.rawPrice - a.content.flightQuotes.cheapest.rawPrice
                    } else {
                        return a.content.flightQuotes.cheapest.rawPrice - b.content.flightQuotes.cheapest.rawPrice
                    };
                });
                result = sortedItinerararies.map(itinerary => {
                    return itinerary
                })
                break;
            case "unfocused-anywhere-anytime":
                unfocusedRes = res as IE_SkyScannerSearchRoundTripUnfocusedAnywhereAnytime
                sortedItinerararies = unfocusedRes.data.everywhereDestination.results.sort((a, b) => {
                    if (!a?.content?.flightQuotes || !b?.content?.flightQuotes) return
                    if (priceSort === 'DESC') {
                        return b.content.flightQuotes.cheapest.rawPrice - a.content.flightQuotes.cheapest.rawPrice
                    } else {
                        return a.content.flightQuotes.cheapest.rawPrice - b.content.flightQuotes.cheapest.rawPrice
                    };
                });
                result = sortedItinerararies.map(itinerary => {
                    return itinerary
                })
                break;
        }

        if (groupByWeekends) {
            return groupedResult
        } else {
            return result
        }


    }

}
