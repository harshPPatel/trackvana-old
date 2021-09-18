import {
  Logger,
  Module,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/databse.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArgonService } from './utils/argon/argon.service';
import { MailModule } from './mail/mail.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { DicebearService } from './utils/dicebear/dicebear.service';
import { UserStub } from './users/stubs/user.stub';

// TODO: Move Argon Service to Core Module?? (only if we have more than Argon service as a global service)
@Module({
  imports: [
    EventEmitterModule.forRoot(),
    DatabaseModule,
    AuthModule,
    UsersModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, ArgonService, DicebearService],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly appService: AppService) {}

  async onApplicationBootstrap() {
    await this.appService.createAdminAccountIfDoesNotExists();
  }
}
