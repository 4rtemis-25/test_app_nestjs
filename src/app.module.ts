import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
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
    BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
