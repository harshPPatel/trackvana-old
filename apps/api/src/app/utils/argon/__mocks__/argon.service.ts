import { Injectable } from '@nestjs/common';

@Injectable()
export class ArgonService {
  async hash(text: string): Promise<string> {
    return text;
  }
}
