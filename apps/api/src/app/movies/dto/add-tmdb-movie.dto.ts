import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddTmdbMovieDto {
  @IsNumber()
  @IsNotEmpty()
  tmdbId: number;
}
