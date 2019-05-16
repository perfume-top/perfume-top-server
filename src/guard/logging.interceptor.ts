import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...LoggingInterceptor');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap((e) => console.log(`After... ${Date.now() - now}ms`, e), map((e) => '2233')),
    );
  }
}
