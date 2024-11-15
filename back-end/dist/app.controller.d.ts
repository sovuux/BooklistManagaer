import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllBooks(): Promise<{
        publicationYear: number;
        title: string;
        author: string;
        genre: string | null;
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getBook(id: number): Promise<{
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
