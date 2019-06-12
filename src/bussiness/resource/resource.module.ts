import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicController } from './music/music.controller';
import { MusicService } from './music/music.service';
import { Music } from '../../entities/resource/music.entity';
import { MusicResolver } from './music/music.resolver';
// import { LoggerMiddleware } from '../../.nest/middleware/logger.middleware';

@Module({
    imports: [TypeOrmModule.forFeature([Music])],
    controllers: [MusicController],
    providers: [MusicService, MusicResolver],
})
export class ResourceModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // console.log('REGGG');
        // consumer
        //   .apply(LoggerMiddleware).forRoutes(MusicController);
          // .forRoutes('music');
          // .forRoutes({ path: 'music', method: RequestMethod.GET });
      }
}
