import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module, NestModule, MiddlewareConsumer, RequestMethod, Injectable } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { ApiModule } from './api/api.module';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import { AdminModule } from './admin/admin.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      path: '/api/graphql',
    }),
    UserModule,
    ApiModule,
    ConfigModule,
    AdminModule,
    WebModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
  exports: [
    ConfigModule
  ]
})

export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //     // console.log('SSSS');
  //     consumer
  //       .apply(ErrorMiddleware)
  //       .forRoutes('graphql');
  //       // .forRoutes({ path: 'music', method: RequestMethod.GET });
  //   }
}
