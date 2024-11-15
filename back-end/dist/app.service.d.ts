import { CreateDto } from "./dto/create.dto";
import { DatabaseService } from "./database/database.service";
import { UpdateDto } from './dto/update.dto';
export declare class AppService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    findAllBooks(): Promise<{
        publicationYear: number;
        title: string;
        author: string;
        genre: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findBookById(id: number): Promise<{
        publicationYear: number;
        title: string;
        author: string;
        genre: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createBook(dto: CreateDto): Promise<{
        publicationYear: number;
        title: string;
        author: string;
        genre: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateBook(id: number, dto: UpdateDto): Promise<{
        publicationYear: number;
        title: string;
        author: string;
        genre: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteBook(id: number): Promise<{
        publicationYear: number;
        title: string;
        author: string;
        genre: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
