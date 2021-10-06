export interface TMDBMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: MoviesCollectionDetails;
  budget: number;
  genres?: GenreDetails[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: ProductionCompaniesDetails[] | null;
  production_countries?: ProductionCountriesDetails[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: SpokenLanguagesDetails[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MoviesCollectionDetails {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}
export interface GenreDetails {
  id: number;
  name: string;
}
export interface ProductionCompaniesDetails {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}
export interface ProductionCountriesDetails {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguagesDetails {
  english_name: string;
  iso_639_1: string;
  name: string;
}
