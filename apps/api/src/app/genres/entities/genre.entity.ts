import { Column, Entity, ManyToMany } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { RootEntity } from '../../utils/entities/root.entity';

@Entity()
export class Genre extends RootEntity {
  @Column({ unique: true, nullable: true })
  tmdbId: number;

  @Column()
  name: string;

  @ManyToMany(() => Movie, (movie) => movie.generes)
  movies: Movie[];
}
