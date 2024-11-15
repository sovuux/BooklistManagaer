import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('library')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('all-books')
  async getAllBooks() {
    return this.appService.findAllBooks();
  }

  @Get('book/:id')
  getBook(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) {
      throw new BadRequestException('Id must be more 0');
    }
    return this.appService.findBookById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('add-book')
  async createBook(@Body() dto: CreateDto) {
    return await this.appService.createBook(dto);
  }

  @Put('update-book/:id')
  async updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateDto,
  ) {
    if (id < 1) {
      throw new BadRequestException('Id must be more 0');
    }
    return this.appService.updateBook(id, dto);
  }

  @Delete('delete-book/:id')
  async deleteBook(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) {
      throw new BadRequestException('Id must be more 0');
    }
    return this.appService.deleteBook(id);
  }
}
