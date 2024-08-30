/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ISearchRoundTrip } from './flight.type';
import { HttpService } from '@nestjs/axios';
import { MockSearchRoundTrip } from 'src/util/mockApi/search-roundtrip.mock';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FlightService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    mockSearchRoundTrip() {
        return MockSearchRoundTrip
    }

    async searchRoundTrip(param: ISearchRoundTrip) {
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
}
