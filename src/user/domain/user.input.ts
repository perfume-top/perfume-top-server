import { InputType, Field, ID } from 'type-graphql';
import { IProfile, ProfileInput } from './profile';
import { IName, NameInput } from './name';
import { ILocation, LocationInput } from './location';
import { IExtend, ExtendInput } from './extend';
import { IConfig, ConfigInput } from './conf';

@InputType()
export class UserInput {

    @Field(type => ID)
    id?: string;
    
    @Field(type => NameInput, {nullable: true})
    name?: NameInput;

    @Field(type => ProfileInput, {nullable: true})
    prof?: ProfileInput;

    @Field(type => LocationInput, {nullable: true})
    loc?: LocationInput;

    @Field(type => ConfigInput, {nullable: true})
    conf?: ConfigInput;

    @Field(type => ExtendInput, {nullable: true})
    ext?: ExtendInput;

}