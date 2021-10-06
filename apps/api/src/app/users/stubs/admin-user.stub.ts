import { AppConstants } from '../../app.constants';
import { User } from '../entities/user.entity';
import { UserGenders } from '../enums/user-gender.enum';

export class AdminUserStub {
  public static getStub(email: string = AppConstants.ADMIN_EMAIL): User {
    return {
      id: 'uuid',
      firstName: 'Admin',
      lastName: 'Admin',
      email,
      password: 'hashedPassword',
      isAdmin: true,
      image: 'https://www.google.com',
      gender: UserGenders.MALE,
      isDisabled: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
