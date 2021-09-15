import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserPasswordService } from './user-password.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UserPasswordService],
  exports: [UsersService, UserPasswordService],
})
export class UsersModule {}
