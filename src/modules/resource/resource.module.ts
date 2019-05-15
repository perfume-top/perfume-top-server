import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';
import { Music } from '../../entities/resource/music.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Music])],
    controllers: [MusicController],
    providers: [MusicService],
})
export class ResourceModule {}
