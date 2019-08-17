import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { config } from './config.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
