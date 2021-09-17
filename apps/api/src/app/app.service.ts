import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { AppConstants } from './app.constants';
import { User } from './users/entities/user.entity';
import { UserGenders } from './users/enums/user-gender.enum';
import { UserCreatedEvent } from './users/events/user-created.event';
import { UserPasswordService } from './users/user-password.service';
import { UsersService } from './users/users.service';
import { ArgonService } from './utils/argon/argon.service';

@Injectable()
export class AppService {
  constructor(
    private readonly usersService: UsersService,
    private readonly userPasswordService: UserPasswordService,
    private readonly argonService: ArgonService,
    private readonly eventEmitter: EventEmitter2
  ) {}

  async createAdminAccountIfDoesNotExists(): Promise<User> {
    const adminUser = await this.usersService.findOneByEmail(
      AppConstants.ADMIN_EMAIL
    );

    if (adminUser) {
      Logger.log(
        'Admin account already exists. Skipping Admin Account Creation porcess.'
      );
      return null;
    }

    // Better name for this variable?
    const password = this.userPasswordService.generateRandomPassword(24);
    const hashedPassword = await this.argonService.hash(password);

    const newAdminUser = new User();
    newAdminUser.firstName = 'Admin';
    newAdminUser.lastName = 'Admin';
    newAdminUser.email = AppConstants.ADMIN_EMAIL;
    // TODO: send email to the admin user
    newAdminUser.password = hashedPassword;
    newAdminUser.isAdmin = true;
    newAdminUser.image = 'https://www.google.com';
    newAdminUser.gender = UserGenders.MALE;

    const dbUser = await this.usersService.create(newAdminUser);
    Logger.log('Successfully created default Admin account!');

    const userCreatedEvent = new UserCreatedEvent();
    userCreatedEvent.firstName = newAdminUser.firstName;
    userCreatedEvent.email = newAdminUser.email;
    userCreatedEvent.temporaryPassword = password;
    this.eventEmitter.emit('user.created', userCreatedEvent);

    return dbUser;
  }
}
