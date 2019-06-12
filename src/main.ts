import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { ExceptionInterceptor } from './common/exception.interceptor';
// import { ErrorFilter } from './middleware/error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new ExceptionInterceptor());
  // app.useGlobalFilters(new ErrorFilter());
  app.enableCors({
    methods: 'GET',
    maxAge: 3600,
  });
  await app.listen(3000);
}
bootstrap();