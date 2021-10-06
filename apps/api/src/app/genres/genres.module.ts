import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';
import { GenresProxy } from './proxies/genre.proxy';

@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenresProxy],
  exports: [GenresProxy],
})
export class GenresModule {}
