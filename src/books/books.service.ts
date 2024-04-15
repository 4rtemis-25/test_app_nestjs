import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBook } from './DTO/create-book.dto';
import { UpdateBook } from './DTO/update-book.dto';

@Injectable()
export class BooksService {

    // INCIALIZACION DEL REPOSITORY
    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {}

    createBook(book: CreateBook){
        const newBook = this.bookRepository.create(book)
        return this.bookRepository.save(newBook)
    }

    getAllBooks(){
        return this.bookRepository.find()
    }

    getBookById(id: number){
        return this.bookRepository.findOne({
            where: {
                id
            }
        })
    }
    
    deleteBook(id: number){
        return this.bookRepository.delete({id})
    }

    updateBook(id: number, book: UpdateBook){
        return this.bookRepository.update({id}, book)
    }
}
