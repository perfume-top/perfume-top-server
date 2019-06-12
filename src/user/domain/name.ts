import { Column } from 'typeorm';
import { Field, InterfaceType, InputType, ObjectType } from 'type-graphql';

@InterfaceType()
@InputType({isAbstract: true})
export abstract class IName {

    @Field({nullable: true})
    @Column({length: 32, nullable: true})
    JP?: string;

    @Field({nullable: true})
    @Column({length: 32, nullable: true})
    CN?: string;

    @Field({nullable: true})
    @Column({length: 32, nullable: true})
    EN?: string;

}

@ObjectType({ implements: IName })
export class Name extends IName {}

@InputType()
export class NameInput extends IName {}
