import { Injectable } from '@nestjs/common';
import { RootProxy } from '../../utils/interfaces/root-proxy.interface';
import { Movie } from '../entities/movie.entity';
import { MovieStatus } from '../enums/movie-status.enum';
import { TMDBMovieDetails } from '../interfaces/tmdb-movie-details.interface';

@Injectable()
export class MovieProxy implements RootProxy<Movie> {
  public createEntity(tmdbMovieDetails: TMDBMovieDetails) {
    const movieEntity = new Movie();
    movieEntity.isAdult = tmdbMovieDetails.adult;
    movieEntity.backdropPath = tmdbMovieDetails.backdrop_path;
    movieEntity.budget = tmdbMovieDetails.budget;
    movieEntity.homepageUrl = tmdbMovieDetails.homepage || null;
    movieEntity.tmdbId = tmdbMovieDetails.id;
    movieEntity.title = tmdbMovieDetails.original_title;
    movieEntity.description = tmdbMovieDetails.overview;
    movieEntity.popularity = tmdbMovieDetails.popularity;
    movieEntity.posterPath = tmdbMovieDetails.poster_path || null;
    movieEntity.releaseDate = new Date(tmdbMovieDetails.release_date);
    movieEntity.revenue = tmdbMovieDetails.revenue;
    movieEntity.runtime = tmdbMovieDetails.runtime;
    movieEntity.status = this.parseMovieStatusValue(tmdbMovieDetails.status);
    movieEntity.tagline = tmdbMovieDetails.tagline || null;
    movieEntity.voteAverage = tmdbMovieDetails.vote_average;
    movieEntity.voteCount = tmdbMovieDetails.vote_count;

    return movieEntity;
  }

  private parseMovieStatusValue(movieStatus: string): MovieStatus {
    if (movieStatus === MovieStatus.RELEASED) {
      return MovieStatus.RELEASED;
    }
    if (movieStatus === MovieStatus.POST_PRODUCTION) {
      return MovieStatus.POST_PRODUCTION;
    }
  }
}
