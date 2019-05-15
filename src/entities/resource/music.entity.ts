import { ChildEntity, Column } from 'typeorm';
import { Resource } from './resource.entity';

@ChildEntity()
export class Music extends Resource {

    @Column({type: 'text', nullable: true})
    src: string;

    @Column({nullable: true})
    arranger: string;

    @Column({nullable: true})
    lyricist: string;

}
