import { Injectable } from '@nestjs/common';
import { UserConstants } from './users.constants';

@Injectable()
export class UserPasswordService {
  private readonly characterSet =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  public createPassword(passwordLength: number): string {
    let password = '';
    password = this.generateRandomPassword(passwordLength);
    while (!password.match(UserConstants.PASSWORD_REGEX)) {
      password = this.generateRandomPassword(passwordLength);
    }
    return password;
  }

  private generateRandomPassword(passwordLength: number): string {
    let password = '';
    if (passwordLength < 8) {
      throw new Error("Password's length atleast should be 8 characters.");
    }
    for (let index = 0; index < passwordLength; index++) {
      const randomIndex = Math.floor(Math.random() * this.characterSet.length);
      password += this.characterSet.charAt(randomIndex);
    }
    // return generatePassword(
    //   passwordLength,
    //   false,
    //   UserConstants.PASSWORD_REGEX
    // );

    return password;
  }
}
