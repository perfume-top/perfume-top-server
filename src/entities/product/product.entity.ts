import { Entity, TableInheritance, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', length: 32, name: 'type' } })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'text', nullable: true})
    content: string;

    @Column()
    author: string;

    @Column({type: 'text', nullable: true})
    keyword: string[];

    @UpdateDateColumn()
    updatedDate: Date;

    @CreateDateColumn()
    createdDate: Date;
}
