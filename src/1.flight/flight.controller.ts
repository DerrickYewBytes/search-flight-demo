/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { ISearchRoundTrip } from './flight.type';
import { FlightService } from './flight.service';
@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) { }

  @Get('search-round-trip')
  searchRoundTrip(@Query() query: ISearchRoundTrip) {

    return this.flightService.searchRoundTrip(query);
  }
}
