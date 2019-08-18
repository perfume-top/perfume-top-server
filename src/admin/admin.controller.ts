import { Controller, Get, Render } from '@nestjs/common';
import { config } from '../config.service';

@Controller('admin')
export class AdminController {
    @Get()
    @Render('admin/index')
    index() {
      return { title: 'P' };
    }

    @Get('login')
    @Render(config.PAGE_LANDING)
    login() {
      return { title: 'P' };
    }
}
