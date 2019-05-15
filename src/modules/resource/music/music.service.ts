import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Music } from '../../../entities/resource/music.entity';

@Injectable()
export class MusicService {
    constructor(@InjectRepository(Music)
    private readonly musicRepository: Repository<Music>) { }

    async create(): Promise<string> {
        const music = new Music();
        music.src = 'xxxxx.mp3';

        return this.musicRepository.save(music)
            .then(res => {
                return 'create music ...done';
            })
            .catch(err => {
                return err;
            });
    }

    async list(): Promise<string> {
        return this.musicRepository.createQueryBuilder('music').getMany()
            .then(musics => {
                return JSON.stringify(musics);
            })
            .catch(err => {
                return err;
            });
    }

    async findOne(id: number): Promise<Music> {
        return await this.musicRepository.findOne({ id });
    }
}
