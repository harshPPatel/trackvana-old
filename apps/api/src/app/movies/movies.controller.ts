import { Body, Controller, Post } from '@nestjs/common';
import { AddTmdbMovieDto } from './dto/add-tmdb-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  // @Get()
  // async test() {
  //   const data = await (
  //     await this.moviesDbService.test()
  //   ).pipe(
  //     map((response) => {
  //       console.log(response.data);
  //     })
  //   );
  //   // console.log(data);
  //   return data;
  // }

  @Post('add/tmdb')
  async addTmdbMovie(@Body() addTmdbMovieDto: AddTmdbMovieDto) {
    await this.moviesService.addTmdbMovie(addTmdbMovieDto.tmdbId);
  }
}
