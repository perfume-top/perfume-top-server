import { Column } from 'typeorm';

export class Config {

    @Column({length: 32})
    lang: string;

    @Column({length: 64, nullable: true})
    email: string;

    @Column({default: true})
    enabled: boolean;

}
