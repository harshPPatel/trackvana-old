import { Test, TestingModule } from '@nestjs/testing';
import { UserGenders } from '../../users/enums/user-gender.enum';
import { UserStub } from '../../users/stubs/user.stub';
import { SvgTester } from '../svg-tester';
import { DicebearService } from './dicebear.service';

describe('DicebearService', () => {
  let service: DicebearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DicebearService],
    }).compile();

    service = module.get<DicebearService>(DicebearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('generateAvatarSVG', () => {
    it('should generate svg', () => {
      const testUser = UserStub.getStub('test@email.com');
      const generatedAvatar = service.generateAvatarSVG(testUser);
      expect(SvgTester.isValidSvg(generatedAvatar)).toEqual(true);
    });
    it('should generate different SVGs for different genders', () => {
      const maleUser = UserStub.getStub('test@email.com');
      const femaleUser = UserStub.getStub('test@email.com');
      femaleUser.gender = UserGenders.FEMALE;
      const maleGeneratedAvatar = service.generateAvatarSVG(maleUser);
      const femaleGeneratedAvatar = service.generateAvatarSVG(femaleUser);
      expect(maleGeneratedAvatar === femaleGeneratedAvatar).toEqual(false);
    });
  });
});
