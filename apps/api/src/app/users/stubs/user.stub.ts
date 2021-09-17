import { AppConstants } from '../../app.constants';
import { User } from '../entities/user.entity';
import { UserGenders } from '../enums/user-gender.enum';

export class UserStub {
  public static getStub(email: string = AppConstants.ADMIN_EMAIL): User {
    return {
      id: 'uuid',
      firstName: 'John',
      lastName: 'Doe',
      email,
      password: 'hashedPassword',
      isAdmin: false,
      image: 'https://www.google.com',
      gender: UserGenders.MALE,
      isDisabled: false,
    };
  }
}
