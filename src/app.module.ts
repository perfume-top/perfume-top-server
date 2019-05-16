import { APP_FILTER } from '@nestjs/core';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceModule } from './modules/resource/resource.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { ErrorFilter } from './middleware/error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ResourceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: ErrorFilter,
    // },
  ],
})

export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //     console.log('SSSS');
  //     consumer
  //       .apply(LoggerMiddleware)
  //       .forRoutes('music');
  //       // .forRoutes({ path: 'music', method: RequestMethod.GET });
  //   }
}
