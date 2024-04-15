import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBook } from './DTO/create-book.dto';
import { Book } from './book.entity';
import { UpdateBook } from './DTO/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Promise<Book[]>{
    return this.booksService.getAllBooks()
  }

  @Get(':id')
  getOneBook(@Param('id', ParseIntPipe) id:number): Promise<Book>{
    return this.booksService.getBookById(id)
  }

  @Post()
  createBook(@Body() newBook: CreateBook): Promise<Book>{
    return this.booksService.createBook(newBook)
  }

  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number){
    return this.booksService.deleteBook(id)
  }

  @Patch(':id')
  updateBook(@Param('id', ParseIntPipe) id:number, @Body() book: UpdateBook){
    return this.booksService.updateBook(id, book)
  }

}
