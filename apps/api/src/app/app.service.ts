import { Injectable, Logger } from '@nestjs/common';
import { AppConstants } from './app.constants';
import { User } from './users/entities/user.entity';
import { UserGenders } from './users/enums/user-gender.enum';
import { UserPasswordService } from './users/user-password.service';
import { UsersService } from './users/users.service';
import { ArgonService } from './utils/argon/argon.service';

@Injectable()
export class AppService {
  constructor(
    private readonly usersService: UsersService,
    private readonly userPasswordService: UserPasswordService,
    private readonly argonService: ArgonService
  ) {}

  async createAdminAccountIfDoesNotExists(): Promise<void> {
    const adminUser = await this.usersService.findOneByEmail(
      AppConstants.ADMIN_EMAIL
    );

    if (adminUser) {
      Logger.log(
        'Admin account already exists. Skipping Admin Account Creation porcess.'
      );
      return;
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

    console.log(newAdminUser);

    const dbUser = await this.usersService.create(newAdminUser);

    if (dbUser) {
      Logger.log('Successfully created default Admin account!');
    }
  }
}
