import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';
import { GenresProxy } from '../genres/proxies/genre.proxy';
import { LanguageProxy } from '../languages/proxies/language.proxy';
import { MoviesCollectionProxy } from '../movies-collections/proxies/movies-collection.proxy';
import { ProductionCompanyProxy } from '../production-companies/proxies/production-company.proxy';
import { MoviedbService } from './moviedb/moviedb.service';
import { MovieProxy } from './proxies/movie.proxy';

@Injectable()
export class MoviesService {
  // TODO: Create adapter class to convert movies response from api to domain entity (creates all the entity class instance and nested classes?)
  // Save all of them at once?
  // May be create other entities first, create movie entity at last and assign other instances to movie in movie service and save it to DB
  // While achieving this, copy the example response from movies.md files so we are not hitting movies api
  // Later Todo: tmdb supports providers!!! Yay!! Grab default providers from here!

  constructor(
    private readonly moviedbService: MoviedbService,
    private readonly movieProxy: MovieProxy,
    private readonly languageProxy: LanguageProxy,
    private readonly productionCompanyProxy: ProductionCompanyProxy,
    private readonly movieCollectionProxy: MoviesCollectionProxy,
    private readonly genresProxy: GenresProxy
  ) {}

  async addTmdbMovie(tmdbId: number) {
    // get response from tmdb service
    // use adapter class to generate instances of different classes
    // each class (related tables) have their own adapters
    // each has method to create entity instance from tmdb response
    // CREATE COMMON INSTANCE FOR ADAPTER CLASSES
    // save all of those details here??
    const apiMovieDetails = await this.moviedbService.getMovieDetails(tmdbId);

    return apiMovieDetails.pipe(
      map((res) => {
        const movieData = res.data;
        // adapter class for movie and other related things
        // services for other entities have method: `createIfDoesNotExists`
        // return COMPLETE movie instance (after saving it)
        // move this as a private method??
        const parsedMovieEntity = this.movieProxy.createEntity(res.data);
        const parsedLanguageEntity = this.languageProxy.createEntity(
          res.data.original_language
        );
        const parsedProductionCompaniesEntites =
          this.productionCompanyProxy.createEntities(
            res.data.production_companies
          );
        const parsedMovieCollectionEntity =
          this.movieCollectionProxy.createEntity(
            res.data.belongs_to_collection
          );
        const parsedGenresEntities = this.genresProxy.createEntities(
          res.data.genres
        );
      }),
      catchError((e) => {
        throw new Error(e.message);
      })
    );
  }
}
