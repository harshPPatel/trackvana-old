import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenresModule } from '../genres/genres.module';
import { LanguageModule } from '../languages/languages.module';
import { MoviesCollectionsModule } from '../movies-collections/movies-collections.module';
import { ProductionCompaniesModule } from '../production-companies/production-companies.module';
import { Movie } from './entities/movie.entity';
import { MoviedbService } from './moviedb/moviedb.service';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { MovieProxy } from './proxies/movie.proxy';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5, //TODO: Look into more options for final deploy
    }),
    TypeOrmModule.forFeature([Movie]),
    LanguageModule,
    ProductionCompaniesModule,
    MoviesCollectionsModule,
    GenresModule,
  ],
  controllers: [MoviesController],
  providers: [MoviedbService, MoviesService, MovieProxy],
})
export class MoviesModule {}
