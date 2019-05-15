import { ChildEntity, Column } from 'typeorm';
import { Resource } from './resource.entity';

@ChildEntity()
export class Video extends Resource {

    @Column({type: 'text', nullable: true})
    src: string;

}
