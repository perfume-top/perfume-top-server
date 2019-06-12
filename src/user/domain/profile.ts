import { Column } from 'typeorm';
import { Field, InterfaceType, InputType, ObjectType } from 'type-graphql';

@InterfaceType()
@InputType({isAbstract: true})
export abstract class IProfile {

    @Field({nullable: true})
    @Column({length: 64, nullable: true})
    intro?: string;

    @Field({nullable: true})
    @Column({length: 64, nullable: true})
    avatar?: string;

    @Field({nullable: true})
    @Column({length: 64, nullable: true})
    blank?: string;
}

@ObjectType({ implements: IProfile })
export class Profile extends IProfile {}

@InputType()
export class ProfileInput extends IProfile {}
