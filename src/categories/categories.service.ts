import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BooksService } from 'src/books/books.service';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategory } from './DTO/create-category.dto';

@Injectable()
export class CategoriesService {

    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
        private booksService: BooksService
    ) {}

    // CREATE CATEGORY
    createCategory(category: CreateCategory){
        const newCategory = this.categoryRepository.create(category)
        return this.categoryRepository.save(newCategory)
    }

    // GET ALL CATEGORIES
    getAllCategories(){
        return this.categoryRepository.find({
            relations: ['book']
        })
    }

}
