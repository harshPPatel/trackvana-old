import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';

import { EmailService } from './email.service';

// TODO: Rename to Email Module and Email Service
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',

        auth: {
          user: 'harshppatel2880@gmail.com',
          pass: 'superfakepasswordlol',
        },
      },
      defaults: {
        from: '"Trackvana" <trackvana@harshpatel.info>',
      },
      template: {
        dir: join(__dirname, 'app/email/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [EmailService],
  controllers: [],
  exports: [EmailService],
})
export class EmailModule {}
