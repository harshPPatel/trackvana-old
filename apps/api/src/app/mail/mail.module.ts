import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';

import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',

        auth: {
          user: 'harshppatel2880@gmail.com',
          pass: 'clejdabjlhdezsmp',
        },
      },
      defaults: {
        from: '"Trackvana" <trackvana@harshpatel.info>',
      },
      template: {
        dir: join(__dirname, 'app/mail/templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService],
})
export class MailModule {}
