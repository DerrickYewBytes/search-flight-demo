import {
    IsBooleanString,
    IsDateString,
    IsDefined,
    IsOptional,
    IsString,
} from 'class-validator';

export class SearchFocusedRoundTripDto {
    @IsDefined()
    @IsString()
    fromEntityId: string;

    @IsDefined()
    @IsString()
    toEntityId: string;

    @IsDefined()
    @IsDateString()
    departDate: string;

    @IsDefined()
    @IsDateString()
    returnDate: string;

    @IsOptional()
    @IsString()
    sort?: 'ASC' | 'DESC';

    @IsOptional()
    @IsBooleanString()
    groupByWeekends?: boolean;
}
