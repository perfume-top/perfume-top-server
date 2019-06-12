import { Column } from 'typeorm';
import { Field, InterfaceType, InputType, ObjectType } from 'type-graphql';

@InterfaceType()
@InputType({isAbstract: true})
export abstract class IExtend {

    @Field({nullable: true})
    @Column({nullable: true})
    ptaDate?: Date;

    @Field({nullable: true})
    @Column({nullable: true})
    wptaDate?: Date;

}

@ObjectType({ implements: IExtend })
export class Extend extends IExtend {}

@InputType()
export class ExtendInput extends IExtend {}
