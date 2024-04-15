import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBook } from './DTO/create-book.dto';

@Injectable()
export class BooksService {

    // INCIALIZACION DEL REPOSITORY
    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {}

    createBook(book: CreateBook){
        const newBook = this.bookRepository.create(book)
        return this.bookRepository.save(newBook)
    }
}
