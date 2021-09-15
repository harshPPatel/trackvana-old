import { Logger, Module, OnModuleInit } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/databse.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AppConstants } from './app.constants';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  async onModuleInit() {
    await this.appService.createAdminAccountIfDoesNotExists();
  }
}
