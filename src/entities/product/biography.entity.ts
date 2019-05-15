import { ChildEntity, Column } from 'typeorm';
import { Product } from './product.entity';

@ChildEntity()
/** 传记 */
export class Discography extends Product {

    @Column({length: 32, nullable: true})
    company: string;

}
