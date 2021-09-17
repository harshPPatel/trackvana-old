import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPasswordService {
  private readonly characterSet =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

  public generateRandomPassword(passwordLength: number): string {
    let password = '';
    if (passwordLength < 8) {
      throw new Error("Password's length atleast should be 8 characters.");
    }
    for (let index = 0; index < passwordLength; index++) {
      const randomIndex = Math.floor(Math.random() * this.characterSet.length);
      password += this.characterSet.charAt(randomIndex);
    }
    return password;
  }
}
