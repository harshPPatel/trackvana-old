import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPasswordService {
  public generateRandomPassword(passwordLength: number): string {
    // TODO: Move this to seperate file as we are using this password in different tests files
    return 'hashedPassword';
  }
}
