import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('AuthGuard ...');
    const roles = this.reflector.get<string[]>('role', context.getClass());
    // const roles = this.reflector.get<string[]>('roles', context.getClass());
    console.log('roles', roles);

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log(user);
    // const hasRole = () => user.roles.some((role) => roles.includes(role));
    // return user && user.roles && hasRole();

    return true;
  }
}
