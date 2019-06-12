import { ChildEntity, Column } from 'typeorm';
import { Resource } from './resource.entity';
import { Field, ID, ObjectType, Int } from 'type-graphql';

@ChildEntity()
@ObjectType()
export class Music extends Resource {

    @Column({type: 'text', nullable: true})
    @Field(type => String, {nullable: true})
    src: string;

    @Column({nullable: true})
    @Field({nullable: true})
    arranger: string;

    @Column({nullable: true})
    @Field({nullable: true})
    lyricist: string;

}
