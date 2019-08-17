import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './config.service';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

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
  app.useStaticAssets(`${config.LOCAL_ADMIN_ROOT}/admin/`, {prefix: '/admin/', dotfiles: "deny", index: false,});
  app.useStaticAssets(`${config.LOCAL_WEB_ROOT}/en/`, {prefix: '/en/', dotfiles: "deny",index: false,});
  app.useStaticAssets(`${config.LOCAL_WEB_ROOT}/cn/`, {prefix: '/cn/', dotfiles: "deny",index: false,});
  app.useStaticAssets(`${config.LOCAL_WEB_ROOT}/jp/`, {prefix: '/jp/', dotfiles: "deny",index: false,});

  app.setBaseViewsDir([config.LOCAL_WEB_ROOT, config.LOCAL_ADMIN_ROOT]);
  app.setViewEngine('hbs');

  app.useGlobalFilters(new HttpExceptionFilter);

  await app.listen(3000);
  
}
bootstrap();