import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesCollection } from './entites/movies-collection.entity';
import { MoviesCollectionProxy } from './proxies/movies-collection.proxy';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesCollection])],
  providers: [MoviesCollectionProxy],
  exports: [MoviesCollectionProxy],
})
export class MoviesCollectionsModule {}
