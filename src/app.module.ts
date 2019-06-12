import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module, NestModule, MiddlewareConsumer, RequestMethod, Injectable } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
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
