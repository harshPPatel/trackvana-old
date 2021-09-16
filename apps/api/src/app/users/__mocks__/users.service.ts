import { Injectable } from '@nestjs/common';
import { AppConstants } from '../../app.constants';
import { User } from '../entities/user.entity';
import { UserGenders } from '../enums/user-gender.enum';

@Injectable()
export class UsersService {
  async findOneByEmail(email: string): Promise<User> {
    return await this.getMockAdminUser(email);
  }

  async create(newUser: User): Promise<User> {
    return await this.getMockAdminUser(newUser.email);
  }

  private getMockAdminUser(email: string): User {
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
    };
  }
}
