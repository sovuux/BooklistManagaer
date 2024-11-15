import { BookInterface } from "../interfaces/BookInterface";
export declare class CreateDto implements BookInterface {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
    status: string;
    created_at: string;
    updated_at: string;
}
