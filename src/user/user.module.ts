import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.domain';
// import { LoggerMiddleware } from '../../.nest/middleware/logger.middleware';
import { UesrController } from './uesr.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionInterceptor } from '../../src/common/exception.interceptor';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UesrController],
    providers: [UserService, UserResolver,],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // console.log('REGGG');
        // consumer
        //   .apply(LoggerMiddleware).forRoutes(MusicController);
          // .forRoutes('music');
          // .forRoutes({ path: 'music', method: RequestMethod.GET });
      }
}
