import { Injectable, Logger } from '@nestjs/common';
import { AppConstants } from './app.constants';
import { User } from './users/entities/user.entity';
import { UserGenders } from './users/enums/user-gender.enum';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}

  async createAdminAccountIfDoesNotExists(): Promise<void> {
    const adminUser = await this.usersService.findOneByEmail(
      AppConstants.ADMIN_EMAIL
    );

    if (adminUser) {
      console.log(adminUser);
      Logger.log(
        'Admin account already exists. Skipping Admin Account Creation porcess.'
      );
      return;
    }

    const newAdminUser = new User();
    newAdminUser.firstName = 'Admin';
    newAdminUser.lastName = 'Admin';
    newAdminUser.email = AppConstants.ADMIN_EMAIL;
    // TODO: Generate random password here and send email to the admin user
    // TODO: Encrypt the password
    newAdminUser.password = AppConstants.ADMIN_PASSWORD;
    newAdminUser.isAdmin = true;
    newAdminUser.image = 'https://www.google.com';
    newAdminUser.gender = UserGenders.MALE;

    const dbUser = await this.usersService.create(newAdminUser);

    if (dbUser) {
      Logger.log('Successfully created default Admin account!');
    }
  }
}
