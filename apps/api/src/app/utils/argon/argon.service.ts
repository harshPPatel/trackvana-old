import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';

@Injectable()
export class ArgonService {
  async hash(text: string): Promise<string> {
    return await argon.hash(text);
  }
}
