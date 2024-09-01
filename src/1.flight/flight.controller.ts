/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { FlightService } from './flight.service';
import { SearchFocusedRoundTripDto } from './dto/search-focused-round-trip.dto';
import { SearchUnfocusedRoundTripDto } from './dto/search-unfocused-round-trip.dto';
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) { }

  /*
  API 1.1 - Search Focused Round Trip
  This API is used to do focused search on roundtrip. It will return a list of itineraries, and can be optionally sorted by price.
  Trip origin and destination, and departure and return date must be defined.

  params: 
  fromEntityId: string
  toEntityId: string
  departDate: string
  returnDate: string
  sort?: 'ASC' | 'DESC'
  groupByWeekends?: boolean
  */
  @Get('search-focused-round-trip')
  searchFocusedRoundTrip(@Query() query: SearchFocusedRoundTripDto) {
    return this.flightService.searchFocusedRoundTrip(query);
  }

  /*
  API 1.2 - Search Unfocused Round Trip
  This API is used to do unfocused search on roundtrip. It will return a list of possible itineraries, and can be optionally sorted by price.
  This API can group trips into weekends and weekdays based on the return trip's departure date if groupByWeekends is set to true and the search type is with both locations specified.
  Trip origin must be defined, but destination, and departure and return date are optional.
  
  If departDate and returnDate is undefined, the result will be a list of itineraries with set origin and destination but without any date set.
  If toEntityId, departDate and returnDate are undefined, the result will be a list of itineraries without a set destination and date

  params: 
  fromEntityId: string
  toEntityId?: string
  departDate?: string
  returnDate?: string
  sort?: 'ASC' | 'DESC'
  groupByWeekends?: boolean
  */
  @Get('search-unfocused-round-trip')
  searchUnfocusedRoundTrip(@Query() query: SearchUnfocusedRoundTripDto) {
    return this.flightService.searchUnfocusedRoundTrip(query);
  }
}
