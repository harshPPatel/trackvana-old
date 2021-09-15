import { Logger, Module, OnModuleInit } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/databse.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArgonService } from './utils/argon/argon.service';

// TODO: Move Argon Service to Core Module?? (only if we have more than Argon service as a global service)
@Module({
  imports: [DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, ArgonService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly appService: AppService) {}

  async onModuleInit() {
    await this.appService.createAdminAccountIfDoesNotExists();
  }
}
