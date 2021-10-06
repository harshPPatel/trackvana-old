import { Column, Entity, OneToMany } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { RootEntity } from '../../utils/entities/root.entity';

@Entity()
export class MoviesCollection extends RootEntity {
  @Column({ unique: true, nullable: true })
  tmdbId: number;

  @Column()
  name: string;

  @Column()
  posterPath: string;

  @Column()
  backdropPath: string;

  @OneToMany(() => Movie, (movie) => movie.collection)
  movies: Movie[];
}
