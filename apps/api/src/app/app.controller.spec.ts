import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();
  });

  describe('getWelcomeMessage', () => {
    it('should return "Welcome to Trackvana API!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getWelcomeMessage()).toEqual({
        message: 'Welcome to Trackvana API!',
      });
    });
  });
});
