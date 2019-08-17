import { Module } from '@nestjs/common';
import { AdminUserController } from './admin-user.controller';
import { AdminController } from './admin.controller';

@Module({
  controllers: [
    AdminController,
    AdminUserController
  ]
})
export class AdminModule {}
