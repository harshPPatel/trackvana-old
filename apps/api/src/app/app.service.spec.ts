import { Test } from '@nestjs/testing';

import { AppService } from './app.service';
import { UserPasswordService } from './users/user-password.service';
import { UsersService } from './users/users.service';
import { ArgonService } from './utils/argon/argon.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, UsersService, UserPasswordService, ArgonService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  // TODO: remove this and method once you add more tests on this module
  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to api!' });
    });
  });
});
