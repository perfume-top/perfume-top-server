import { ChildEntity, Column, ManyToMany, JoinTable} from 'typeorm';
import { Disk } from './disk.entity';
import { Music } from '../../resource/music.entity';

@ChildEntity()
export class CD extends Disk {

    @ManyToMany(type => Music)
    @JoinTable()
    music: Music[];

}
