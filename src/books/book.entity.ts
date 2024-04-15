import { Category } from "src/categories/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// CONFIGURACION DE LA TABLA BOOKS

@Entity({name: 'books'})
export class Book {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({nullable: true})
    desc: string

    @Column()
    price: number

    @Column()
    author: string

    @Column({type: 'datetime'})
    pubDate: Date

    @Column()
    inStock: boolean

    @Column()
    categoryId: number

    @ManyToOne(() => Category, category => category.book)
    category: Category
}