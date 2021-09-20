import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserPasswordService } from './user-password.service';
import { EmailModule } from '../email/email.module';
import { UserCreatedListener } from './listeners/user-created.listener';

@Module({
  imports: [TypeOrmModule.forFeature([User]), EmailModule],
  providers: [UsersService, UserPasswordService, UserCreatedListener],
  exports: [UsersService, UserPasswordService],
})
export class UsersModule {}
