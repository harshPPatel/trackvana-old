import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcomeMessage() {
    return {
      message: 'Welcome to Trackvana API!',
    };
  }
}
