import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { Test, TestingModule } from '@nestjs/testing';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailService } from './email.service';
import { UserCreatedEvent } from '../users/events/user-created.event';
import { UserStub } from '../users/stubs/user.stub';

jest.mock('@nestjs-modules/mailer');
describe('MailService', () => {
  let service: EmailService;
  let mailerService: MailerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService, MailerService],
    }).compile();

    service = module.get<EmailService>(EmailService);
    mailerService = module.get<MailerService>(MailerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call MailerService with correct options', async () => {
    const testUser = UserStub.getStub('test@email.com');
    const testUserCreatedEvent = new UserCreatedEvent();
    testUserCreatedEvent.email = testUser.email;
    testUserCreatedEvent.firstName = testUser.firstName;
    testUserCreatedEvent.temporaryPassword = testUser.password;

    jest.spyOn(mailerService, 'sendMail').mockResolvedValue(null);

    await service.sendWelcomeEmail(testUserCreatedEvent);

    expect(mailerService.sendMail).toHaveBeenCalledTimes(1);
    expect(mailerService.sendMail).toHaveBeenCalledWith({
      to: testUserCreatedEvent.email,
      subject: 'Welcome to Trackvana!',
      template: './welcome',
      context: {
        firstName: testUserCreatedEvent.firstName,
        password: testUserCreatedEvent.temporaryPassword,
      },
    });
  });
});
