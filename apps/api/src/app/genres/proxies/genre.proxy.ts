import { Injectable } from '@nestjs/common';
import { GenreDetails } from '../../movies/interfaces/tmdb-movie-details.interface';
import { RootProxy } from '../../utils/interfaces/root-proxy.interface';
import { Genre } from '../entities/genre.entity';

@Injectable()
export class GenresProxy implements RootProxy<Genre> {
  createEntity(genreDetails: GenreDetails) {
    const genreEntity = new Genre();

    genreEntity.name = genreDetails.name;
    genreEntity.tmdbId = genreDetails.id;

    return genreEntity;
  }

  createEntities(genresDetails: GenreDetails[]) {
    const genresEntities: Genre[] = [];

    genresDetails.forEach((genreDetails) => {
      genresEntities.push(this.createEntity(genreDetails));
    });

    return genresEntities;
  }
}
