import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin/user')
export class AdminUserController {
    @Get(['', '/add'])
    @Render('admin/index')
    getHello() {
      return { title: 'P' };
    }
}
