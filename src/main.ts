import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config.service';

// import { ExceptionInterceptor } from './common/exception.interceptor';
// import { ErrorFilter } from './middleware/error.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useGlobalInterceptors(new ExceptionInterceptor());
  // app.useGlobalFilters(new ErrorFilter());
  app.enableCors({
    methods: 'GET',
    maxAge: 3600,
  });
  const config = app.get(ConfigService);
  app.useStaticAssets(config.LOCAL_STATIC_ROOT, { 
    prefix: config.STATIC_PREFIX,
  });
  app.useStaticAssets(config.LOCAL_WEB_ROOT, {
    dotfiles: "deny",
    index: false,
  });

  app.setBaseViewsDir(config.LOCAL_WEB_ROOT);
  app.setViewEngine('hbs');

  await app.listen(3000);
  
}
bootstrap();