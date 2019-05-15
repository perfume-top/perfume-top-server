import { Column } from 'typeorm';

export class Location {

    @Column({length: 32})
    country: string;

    @Column({length: 32, nullable: true})
    province: string;

    @Column({length: 32, nullable: true})
    district: string;

}
