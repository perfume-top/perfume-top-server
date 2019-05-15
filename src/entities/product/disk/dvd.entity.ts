import { ChildEntity, Column, ManyToMany, JoinTable} from 'typeorm';
import { Disk } from './disk.entity';
import { Video } from '../../resource/video.entity';

@ChildEntity()
export class DVD extends Disk {

    @ManyToMany(type => Video)
    @JoinTable()
    video: Video[];

}
