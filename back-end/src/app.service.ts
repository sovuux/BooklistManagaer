import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateDto } from "./dto/create.dto";
import { DatabaseService } from "./database/database.service";
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class AppService {
  constructor(
      private readonly databaseService: DatabaseService,
  ) {}

  async findAllBooks() {
    const books = this.databaseService.books.findMany({
      orderBy: {
        id: "asc"
      }
    });

    if (!books) {
      throw new NotFoundException('No books found.');
    }

    return books;
  }

  async findBookById(id: number) {
    const book =  this.databaseService.books.findUnique({
      where: { id }
    });

    if (!book) {
      throw new NotFoundException(`Book with ID - ${id} not found`);
    }

    return book;
  }

  async createBook(dto: CreateDto) {
    return this.databaseService.books.create({
      data : dto
    });
  }

  async updateBook(id: number, dto: UpdateDto) {
    const book =  this.databaseService.books.findUnique({
      where: { id }
    });

    if (!book) {
      throw new NotFoundException(`Book with ID - ${id} not found`);
    }

    return this.databaseService.books.update({
      where: { id },
      data : dto
    });
  }

  async deleteBook(id: number) {
      const book = await this.databaseService.books.delete({
        where: { id }
      });

      if (!book) {
        throw new NotFoundException(`Book with ID - ${id} not found`);
      }

      return this.databaseService.books.delete({
        where: { id }
      })
  }
}
