import { Column, Entity, ManyToMany } from 'typeorm';
import { Movie } from '../../movies/entities/movie.entity';
import { RootEntity } from '../../utils/entities/root.entity';

@Entity()
export class ProductionCompany extends RootEntity {
  @Column({ unique: true, nullable: true })
  tmdbId: number;

  @Column()
  logoPath: string;

  @Column()
  name: string;

  @Column()
  originCountry: string;

  @ManyToMany(() => Movie, (movie) => movie.productionCompanies)
  movies: Movie[];
}
