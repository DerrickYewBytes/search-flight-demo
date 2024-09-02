/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import { SearchFocusedRoundTripDto } from './dto/search-focused-round-trip.dto';
import { SearchUnfocusedRoundTripDto } from './dto/search-unfocused-round-trip.dto';
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) { }

  /**
  * API 1.1 - Search Focused Round Trip
  * This API is used to do focused search on roundtrip. It will return a list of itineraries, and it is set to default to sort by price ascendingly and it can be optionally descendingly.
  * Trip origin and destination, and departure and return date must be defined.
  * 
  * @param {string} fromEntityId 
  * @param {string} toEntityId 
  * @param {string} departDate 
  * @param {string} returnDate 
  * @param {"ASC" | "DESC"} priceSort - ASC or DESC
  * @param {boolean} groupByWeekends
  * @returns I_SearchFocusedRoundTripRes  
  */
  @Get('search-focused-round-trip')
  searchFocusedRoundTrip(@Query() query: SearchFocusedRoundTripDto) {
    return this.flightService.searchFocusedRoundTrip(query);
  }

  /**
  * API 1.2 - Search Unfocused Round Trip
  * This API is used to do unfocused search on roundtrip. It will return a list of possible itineraries, and it is set to default to sort by price ascendingly and it can be optionally descendingly.
  * This API can group trips into weekends and weekdays if groupByWeekends is set to true and both locations are specified.
  * Trip origin must be defined, but destination, and departure and return date are optional.
  * 
  * If departDate and returnDate is undefined, the result will be a list of itineraries with set origin and destination but without any date set.
  * If toEntityId, departDate and returnDate are undefined, the result will be a list of itineraries without a set destination and date
  * 
  * @param {string} fromEntityId 
  * @param {string} toEntityId 
  * @param {string} departDate 
  * @param {string} returnDate 
  * @param {"ASC" | "DESC"} priceSort - ASC or DESC
  * @param {boolean} groupByWeekends
  * @returns I_SearchUnfocusedRoundTripRes  
  */
  @Get('search-unfocused-round-trip')
  searchUnfocusedRoundTrip(@Query() query: SearchUnfocusedRoundTripDto) {
    return this.flightService.searchUnfocusedRoundTrip(query);
  }
}
