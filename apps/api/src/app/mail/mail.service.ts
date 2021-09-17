import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { UserCreatedEvent } from '../users/events/user-created.event';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {
    // this.mailerService.sendMail({
    //   to: 'me@codingwith.fun',
    //   subject: 'Test email from trackvana',
    //   template: './test',
    // });
  }

  async sendWelcomEmail(userCreatedEvent: UserCreatedEvent) {
    Logger.log(`Sending Welcome Email to: ${userCreatedEvent.email}`);
    await this.mailerService.sendMail({
      to: userCreatedEvent.email,
      subject: 'Welcome to Trackvana!',
      template: './welcome',
      context: {
        firstName: userCreatedEvent.firstName,
        password: userCreatedEvent.temporaryPassword,
      },
    });
  }
}
