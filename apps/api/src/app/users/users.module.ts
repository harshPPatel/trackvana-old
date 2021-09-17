import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserPasswordService } from './user-password.service';
import { MailModule } from '../mail/mail.module';
import { UserCreatedListener } from './listeners/user-created.listener';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MailModule],
  providers: [UsersService, UserPasswordService, UserCreatedListener],
  exports: [UsersService, UserPasswordService],
})
export class UsersModule {}
