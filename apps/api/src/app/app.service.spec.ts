import { Test } from '@nestjs/testing';
import { AppConstants } from './app.constants';

import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UserGenders } from './users/enums/user-gender.enum';
import { UserPasswordService } from './users/user-password.service';
import { UsersService } from './users/users.service';
import { ArgonService } from './utils/argon/argon.service';

const getMockAdminUser = () =>
  ({
    id: 'uuid',
    firstName: 'Admin',
    lastName: 'Admin',
    email: AppConstants.ADMIN_EMAIL,
    password: 'hashedPassword',
    isAdmin: true,
    image: 'https://www.google.com',
    gender: UserGenders.MALE,
    isDisabled: false,
  } as User);

jest.mock('./users/users.service');
jest.mock('./users/user-password.service');
jest.mock('./utils/argon/argon.service');

describe('AppService', () => {
  let service: AppService;
  let usersService: UsersService;
  const mockAdminUser = getMockAdminUser();

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, UsersService, UserPasswordService, ArgonService],
    }).compile();

    service = app.get<AppService>(AppService);
    usersService = app.get<UsersService>(UsersService);
  });

  describe('createAdminAccountIfDoesNotExists', () => {
    it('should return null', async () => {
      expect(await service.createAdminAccountIfDoesNotExists()).toBe(null);
    });
    it('should return new Admin User', async () => {
      jest.spyOn(usersService, 'findOneByEmail').mockResolvedValue(null);

      expect(await service.createAdminAccountIfDoesNotExists()).toEqual(
        mockAdminUser
      );
    });
    // expect null
  });
});
