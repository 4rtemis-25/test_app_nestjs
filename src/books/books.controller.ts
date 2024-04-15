import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBook } from './DTO/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  createBook(@Body() newBook: CreateBook){
    return this.booksService.createBook(newBook)
  }

}
