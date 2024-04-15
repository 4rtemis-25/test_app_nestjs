import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategory } from './DTO/create-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  createCategory(@Body() category: CreateCategory){
    return this.categoriesService.createCategory(category)
  }

  @Get()
  getCategories(){
    return this.categoriesService.getAllCategories()
  }
}
