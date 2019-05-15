import { ChildEntity, Column } from 'typeorm';
import { Resource } from './resource.entity';

@ChildEntity()
export class Picture extends Resource {

    @Column({type: 'text'})
    src: string;

}
