import {
    IsBooleanString,
    IsDateString,
    IsDefined,
    IsOptional,
    IsString,
    Validate,
    ValidateIf,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'DepartAndReturnDateConstraint', async: false })
class DepartAndReturnDateConstraint implements ValidatorConstraintInterface {
    validate(_: any, validationArguments?: ValidationArguments): boolean {
        const { departDate, returnDate } =
            validationArguments.object as SearchUnfocusedRoundTripDto;
        // Either both should be defined or both should be undefined
        return (!!departDate && !!returnDate) || (!departDate && !returnDate);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultMessage(_: ValidationArguments): string {
        return 'Either both departDate and returnDate should be defined or both should be undefined';
    }
}

@ValidatorConstraint({ name: 'DestinationAndDatesConstraint', async: false })
class DestinationAndDatesConstraint implements ValidatorConstraintInterface {
    validate(_: any, validationArguments?: ValidationArguments): boolean {
        // as departDate and returnDate are validated in DepartAndReturnDateConstraint, this validator only uses departDate
        const { toEntityId, departDate } =
            validationArguments.object as SearchUnfocusedRoundTripDto;

        // Either toEntityId or departDate should be defined or both are undefined, but not both defined at the same time
        return (
            (!!toEntityId && !departDate) ||
            (!toEntityId && !!departDate) ||
            (!toEntityId && !departDate)
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultMessage(_: ValidationArguments): string {
        return 'Either toEntityId or departDate should be defined, but not both at the same time';
    }
}

export class SearchUnfocusedRoundTripDto {
    @IsDefined()
    @IsString()
    fromEntityId: string;

    @IsOptional()
    @IsString()
    toEntityId: string;

    @ValidateIf((o) => o.departDate)
    @IsDefined()
    @IsDateString()
    departDate: string;

    @ValidateIf((o) => o.returnDate)
    @IsDefined()
    @IsDateString()
    returnDate: string;

    @IsOptional()
    @IsString()
    sort?: 'ASC' | 'DESC';

    @IsOptional()
    @IsBooleanString()
    groupByWeekends?: boolean;

    @Validate(DepartAndReturnDateConstraint)
    datesValidated?: boolean;

    @Validate(DestinationAndDatesConstraint)
    destinationAndDatesValidated?: boolean;
}
