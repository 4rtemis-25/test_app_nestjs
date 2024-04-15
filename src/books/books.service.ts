import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBook } from './DTO/create-book.dto';
import { UpdateBook } from './DTO/update-book.dto';

@Injectable()
export class BooksService {

    // REPOSITORY
    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {}

    // CREATE BOOK
    async createBook(book: CreateBook){

        const bookFound = await this.bookRepository.findOne({
            where: {
                title: book.title
            }
        })

        if(bookFound){
            return new HttpException('Book already exist', HttpStatus.BAD_REQUEST)
        }

        const newBook = this.bookRepository.create(book)
        return this.bookRepository.save(newBook)
    }

    // GET ALL BOOKS
    getAllBooks(){
        return this.bookRepository.find()
    }

    // GET ONE BOOK
    async getBookById(id: number){
        const bookFound = await this.bookRepository.findOne({
            where: {
                id
            }
        })

        if(!bookFound){
            return new HttpException('Book not found', HttpStatus.NOT_FOUND)
        }

        return bookFound;
    }
    
    // DELETE ONE BOOK
    async deleteBook(id: number){
        const result = await this.bookRepository.delete({id})

        if(result.affected === 0){
            return new HttpException('Book not found', HttpStatus.NOT_FOUND)
        }

        return result;
    }

    // UPDATE BOOK
    async updateBook(id: number, book: UpdateBook){
        const bookFound = await this.bookRepository.findOne({
            where: {
                id
            }
        })

        if(!bookFound){
            return new HttpException('Book not found', HttpStatus.NOT_FOUND)
        }

        const updateBook = Object.assign(bookFound, book)
        return this.bookRepository.update({id}, book)
    }
}
