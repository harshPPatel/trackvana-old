import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserGenders } from '../enums/user-gender.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  // TODO: Add default value from the Avatar Generator Service
  // TODO: Make it nullable = false
  @Column({ type: 'text' })
  image: string;

  // TODO: Hide it in response
  @Column({ nullable: false })
  password: string;

  @Column({ default: false, nullable: false })
  isAdmin: boolean;

  @Column({ type: 'enum', enum: UserGenders, nullable: false })
  gender: UserGenders;

  @Column({ default: false, nullable: false })
  isDisabled: boolean;
}
