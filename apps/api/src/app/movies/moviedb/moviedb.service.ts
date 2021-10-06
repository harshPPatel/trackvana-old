import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { TMDBMovieDetails } from '../interfaces/tmdb-movie-details.interface';
import { MoviesConstants } from '../movies.constants';

@Injectable()
export class MoviedbService {
  private readonly BASE_URL = 'https://api.themoviedb.org/3/movie';

  constructor(private readonly httpService: HttpService) {}

  async test() {
    const URL = `${this.BASE_URL}/76341`;
    return this.httpService.get(URL, {
      params: {
        api_key: MoviesConstants.MOVIE_DB_API_KEY,
      },
      // headers: { Authorization: `Bearer ${MoviesConstants.MOVIE_DB_API_KEY}` },
    });
  }

  async getMovieDetails(movieId: number) {
    const URL = `${this.BASE_URL}/${movieId}`;
    return await this.httpService.get<TMDBMovieDetails>(URL, {
      params: {
        // Todo: Replace with Config module!
        api_key: MoviesConstants.MOVIE_DB_API_KEY,
      },
    });
  }
}
