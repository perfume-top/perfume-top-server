import { Get, Controller, Param } from '@nestjs/common';
import { Music } from '../../../entities/resource/music.entity';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {

    constructor(private readonly musicService: MusicService) {}

    @Get()
    async root(): Promise<string> {
        return this.musicService.list();
    }

    @Get('create')
    async create(): Promise<string> {
        return this.musicService.create();
    }

    @Get('id/:id')
    async findOne(@Param() params): Promise<Music> {
        return this.musicService.findOne(params.id);
    }
}
