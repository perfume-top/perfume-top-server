import { CreateDateColumn, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Config } from './conf';
import { Extend } from './extend';
import { Location } from './location';
import { Profile } from './profile';
import { Name } from './name';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    /** */
    @Column(type => Name)
    name: Name;

    @Column(type => Location)
    loc: Location;

    @Column(type => Profile)
    prof: Profile;

    @Column(type => Config)
    conf: Profile;

    @Column(type => Extend)
    ext: Extend;

    @CreateDateColumn()
    createdDate: Date;

}
