import { Column } from 'typeorm';

export class Extend {

    @Column({nullable: true})
    ptaDate: Date;

    @Column({nullable: true})
    wptaDate: Date;

}
