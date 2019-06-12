import { Column } from 'typeorm';
import { Field, InterfaceType, InputType, ObjectType } from 'type-graphql';

@InterfaceType()
@InputType({isAbstract: true})
export abstract class IConfig {

    @Field()
    @Column({length: 32})
    lang: string;

    @Field({nullable: true})
    @Column({length: 64, nullable: true})
    email?: string;

    @Field(type => Boolean, {nullable: true})
    @Column({type: 'boolean', default: true})
    enabled: boolean;

}

@ObjectType({ implements: IConfig })
export class Config extends IConfig {}

@InputType()
export class ConfigInput extends IConfig {}
