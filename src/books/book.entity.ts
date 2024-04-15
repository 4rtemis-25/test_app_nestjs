import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}