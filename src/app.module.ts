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
import { config } from './config.service';
import { AdminModule } from './admin/admin.module';
import { WebModule } from './web/web.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: config.DB_TYPE,
      host: config.DB_HOST,
      port: config.DB_PORT,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
      entities: [
        `${__dirname}/**/**.domain.**`,
        `${__dirname}/**/**.entity.**`
      ],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      typePaths: [`${__dirname}/**/*.graphql`],
      installSubscriptionHandlers: true,
      autoSchemaFile: `${__dirname}/schema.gql`,
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
