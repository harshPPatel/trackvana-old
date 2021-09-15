import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { DatabaseConstants } from './database.constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DatabaseConstants.DB_HOST, // make it to change dynamically
      port: DatabaseConstants.DB_PORT,
      username: DatabaseConstants.DB_USERNAME,
      password: DatabaseConstants.DB_PASSWORD,
      database: DatabaseConstants.DB_NAME,
      entities: [User],
      synchronize: true, // should only be true in development
    }),
  ],
})
export class DatabaseModule {}
