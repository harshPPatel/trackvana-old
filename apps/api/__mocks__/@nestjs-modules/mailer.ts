import { ISendMailOptions } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerService {
  async sendMail(options: ISendMailOptions) {
    return await Promise.resolve();
  }
}
