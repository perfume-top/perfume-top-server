import { PrimaryGeneratedColumn, Entity, Column , CreateDateColumn} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Name } from './name';
import { Profile } from './profile';
import { Config } from './conf';
import { Extend } from './extend';
import { Location } from './location';

@Entity()
@ObjectType()
export class User {
    @Field(type => ID)
    @Column(type => String)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(type => Name)
    @Column(type => Name)
    name: Name;

    @Field(type => Location)
    @Column(type => Location)
    loc: Location;

    @Field(type => Profile)
    @Column(type => Profile)
    prof: Profile;

    @Field(type => Config)
    @Column(type => Config)
    conf: Config;

    @Field(type => Extend)
    @Column(type => Extend)
    ext: Extend;

    @Field()
    @CreateDateColumn()
    createdDate: Date;

}