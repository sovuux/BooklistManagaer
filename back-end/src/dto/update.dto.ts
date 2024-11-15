import { IsNotEmpty, IsOptional, IsString, IsInt } from "class-validator";

export class UpdateDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    title?: string;

    @IsOptional()
    @IsString()
    author?: string;

    @IsOptional()
    @IsInt()
    publicationYear?: number;

    @IsOptional()
    @IsString()
    genre?: string;

    @IsOptional()
    @IsString()
    status?: string;
}