import { IsDateString, IsEnum, IsNotEmpty, IsObject, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Item, Name } from "../schemas/event.schema";

export class CreateEventDTO {
    @IsNotEmpty()
    @IsString()
    readonly device: string;

    @IsNotEmpty()
    @IsEnum(Name, { message: 'Please enter Event Name from given options!' })
    readonly name: Name;

    @IsNotEmpty({ message: 'Occurred is required and must be a valid Date string in ISO format!' })
    @IsDateString()
    readonly occurred: string;

    @IsNotEmpty({ message: 'Item ID and Name is required!' })
    @IsObject({ message: 'Item ID and Name must be a string' })
    @ValidateNested()
    @Type(() => Item)
    readonly item: Item;
}
