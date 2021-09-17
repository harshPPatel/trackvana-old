import { Test, TestingModule } from '@nestjs/testing';
import { UserPasswordService } from './user-password.service';
import { UserConstants } from './users.constants';

describe('UserPasswordService', () => {
  let service: UserPasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPasswordService],
    }).compile();

    service = module.get<UserPasswordService>(UserPasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateRandomPassword', () => {
    it('should throw error', () => {
      expect(() => service.generateRandomPassword(0)).toThrowError(
        "Password's length atleast should be 8 characters."
      );
      expect(() => service.generateRandomPassword(-5)).toThrowError(
        "Password's length atleast should be 8 characters."
      );
    });

    it('should generate random password', () => {
      const passwordLength = 8;
      const generatedPassword = service.generateRandomPassword(passwordLength);
      expect(generatedPassword).toHaveLength(passwordLength);
      expect(generatedPassword).toMatch(UserConstants.PASSWORD_REGEX);
    });
  });
});
