import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

// TODO: Rename to HashService
// TODO: Wrap argon to another class and call that in this service
@Injectable()
export class ArgonService {
  async hash(text: string): Promise<string> {
    return await argon.hash(text);
  }

  async verify(hashedText: string, plainText: string) {
    return await argon.verify(hashedText, plainText);
  }
}
