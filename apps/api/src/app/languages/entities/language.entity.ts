import { Column, Entity, OneToMany } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { RootEntity } from '../../utils/entities/root.entity';

@Entity()
export class Language extends RootEntity {
  @Column({ length: 2, unique: true, nullable: false })
  isoCode: string;

  @OneToMany(() => Movie, (movie) => movie.originalLanguage)
  movies: Movie[];
}
