import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Genre } from '../../genres/entities/genre.entity';
import { Language } from '../../languages/entities/language.entity';
import { MoviesCollection } from '../../movies-collections/entites/movies-collection.entity';
import { ProductionCompany } from '../../production-companies/entities/production-company.entity';
import { RootEntity } from '../../utils/entities/root.entity';
import { MovieStatus } from '../enums/movie-status.enum';

@Entity()
export class Movie extends RootEntity {
  @Column({ precision: 0, unique: true })
  tmdbId: number;

  @Column({ unique: true })
  imdbId: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  tagline: string;

  @Column()
  popularity: number;

  @Column()
  homepageUrl: string;

  @Column({ type: 'bigint' })
  budget: number;

  @Column()
  posterPath: string;

  @Column({ nullable: false })
  releaseDate: Date;

  @Column({ type: 'bigint' })
  revenue: number;

  @Column({ nullable: false })
  runtime: number;

  @Column()
  voteCount: number;

  @Column()
  voteAverage: number;

  @Column({ nullable: false, default: false })
  isAdult: boolean;

  @Column()
  backdropPath: string;

  @Column({ type: 'enum', enum: MovieStatus, nullable: false })
  status: MovieStatus;

  @ManyToOne(() => Language, (language) => language.movies, {
    onDelete: 'SET NULL',
  })
  originalLanguage: Language;

  @ManyToMany(
    () => ProductionCompany,
    (productionCompany) => productionCompany.movies,
    { onDelete: 'SET NULL' }
  )
  productionCompanies: ProductionCompany[];

  @ManyToOne(
    () => MoviesCollection,
    (moviesCollection) => moviesCollection.movies,
    { onDelete: 'SET NULL' }
  )
  collection: MoviesCollection;

  @ManyToMany(() => Genre, (genre) => genre.movies, { onDelete: 'SET NULL' })
  generes: Genre[];
}
