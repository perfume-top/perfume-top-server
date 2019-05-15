import { Column } from 'typeorm';

export class Name {

    @Column({length: 32, nullable: true})
    JP: string;

    @Column({length: 32, nullable: true})
    CN: string;

    @Column({length: 32, nullable: true})
    EN: string;

}
