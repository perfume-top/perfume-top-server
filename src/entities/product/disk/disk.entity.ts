import { Entity, TableInheritance, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', length: 32, name: 'type' } })
export class Disk {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    title: string;

    @Column({type: 'text', nullable: true})
    desc: string;

}
