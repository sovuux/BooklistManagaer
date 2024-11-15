import { BookInterface } from "../interfaces/BookInterface";
import { IsNumber, Max } from "class-validator";

const currentYear = new Date().getFullYear();

export class CreateDto implements BookInterface {
    title: string;
    author: string;
    @IsNumber()
    @Max(currentYear)
    publicationYear: number;
    genre: string;
    status: string;
    created_at: string;
    updated_at: string;
}