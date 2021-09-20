import { Test } from '@nestjs/testing';
import { EventEmitter2 } from 'eventemitter2';
import { AppConstants } from '../app.constants';

import { AppService } from '../app.service';
import { User } from '../users/entities/user.entity';
import { UserGenders } from '../users/enums/user-gender.enum';
import { UserCreatedEvent } from '../users/events/user-created.event';
import { AdminUserStub } from '../users/stubs/admin-user.stub';
import { UserPasswordService } from '../users/user-password.service';
import { UsersService } from '../users/users.service';
import { ArgonService } from '../utils/argon/argon.service';
import { DicebearService } from '../utils/dicebear/dicebear.service';

jest.mock('eventemitter2');
jest.mock('./users/users.service');
jest.mock('./users/user-password.service');
jest.mock('./utils/argon/argon.service');
jest.mock('./utils/dicebear/dicebear.service');

describe('AppService', () => {
  let service: AppService;
  let usersService: UsersService;
  let dicebearService: DicebearService;
  let eventEmitter: EventEmitter2;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        AppService,
        UsersService,
        UserPasswordService,
        ArgonService,
        EventEmitter2,
        DicebearService,
      ],
    }).compile();

    service = app.get<AppService>(AppService);
    usersService = app.get<UsersService>(UsersService);
    dicebearService = app.get<DicebearService>(DicebearService);
    eventEmitter = app.get<EventEmitter2>(EventEmitter2);
  });

  describe('createAdminAccountIfDoesNotExists', () => {
    it('should return null', async () => {
      expect(await service.createAdminAccountIfDoesNotExists()).toBe(null);
    });
    it('should return new Admin User', async () => {
      const testSVG = '<svg>Teset Email</svg>';
      const testUser = AdminUserStub.getStub();
      testUser.image = testSVG;
      const testUserCreatedEvent = new UserCreatedEvent();
      testUserCreatedEvent.email = testUser.email;
      testUserCreatedEvent.firstName = testUser.firstName;
      testUserCreatedEvent.temporaryPassword = testUser.password;

      jest.spyOn(usersService, 'findOneByEmail').mockResolvedValue(null);
      jest.spyOn(usersService, 'create').mockResolvedValue(testUser);
      jest.spyOn(dicebearService, 'generateAvatarSVG').mockReturnValue(testSVG);
      jest.spyOn(eventEmitter, 'emit').mockReturnValue(true);

      expect(await service.createAdminAccountIfDoesNotExists()).toEqual(
        testUser
      );

      const dicebearTestUser = { ...testUser };
      delete dicebearTestUser.image;
      expect(dicebearService.generateAvatarSVG).toHaveBeenCalledTimes(1);

      expect(eventEmitter.emit).toHaveBeenCalledTimes(1);
      expect(eventEmitter.emit).toHaveBeenCalledWith(
        'user.created',
        testUserCreatedEvent
      );
    });
  });
});
