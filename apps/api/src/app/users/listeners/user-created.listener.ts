import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EmailService } from '../../email/email.service';
import { UserCreatedEvent } from '../events/user-created.event';

@Injectable()
export class UserCreatedListener {
  constructor(private readonly mailService: EmailService) {}

  // TODO: move these event names somewhere else?
  @OnEvent('user.created')
  async handleUserCreatedEvent(payload: UserCreatedEvent) {
    await this.mailService.sendWelcomeEmail(payload);
  }
}
