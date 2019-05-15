import { Column } from 'typeorm';

export class Profile {

    @Column({length: 64, nullable: true})
    intro: string;

    @Column({length: 64, nullable: true})
    avatar: string;

    @Column({length: 64, nullable: true})
    blank: string;

}
