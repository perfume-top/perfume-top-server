import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class WebController {
    @Get(['/', '/en', '/en/*'])
    @Render('en/index')
    index() {
      return { base: 'en' };
    }

    // @Get('login')
    // @Render(config.PAGE_LANDING)
    // login() {
    //   return { title: 'P' };
    // }
}
