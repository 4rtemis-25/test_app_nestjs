import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    // CREDENCIALES DE LA BD CON TYPEORM
    TypeOrmModule.forRoot(
      {
       type: 'mysql',
       host: 'localhost',
       port: 3306,
       username: 'root',
       password: '',
       database: 'crud_books_db',
       entities: [__dirname + '/**/*.entity{.ts,.js}'],
       synchronize: true
      }
    ),
    BooksModule,
    CategoriesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
