import { Injectable } from '@nestjs/common';
import { MoviesCollectionDetails } from '../../movies/interfaces/tmdb-movie-details.interface';
import { RootProxy } from '../../utils/interfaces/root-proxy.interface';
import { MoviesCollection } from '../entites/movies-collection.entity';

@Injectable()
export class MoviesCollectionProxy implements RootProxy<MoviesCollection> {
  createEntity(moviesCollectionDetails: MoviesCollectionDetails) {
    const moviesCollectionEntity = new MoviesCollection();

    moviesCollectionEntity.name = moviesCollectionDetails.name;
    moviesCollectionEntity.posterPath =
      moviesCollectionDetails.poster_path || null;
    moviesCollectionEntity.backdropPath =
      moviesCollectionDetails.backdrop_path || null;
    moviesCollectionEntity.tmdbId = moviesCollectionDetails.id;

    return moviesCollectionEntity;
  }
}
