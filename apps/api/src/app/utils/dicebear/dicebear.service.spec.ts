import { Test, TestingModule } from '@nestjs/testing';
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

  // test generate method
  // Should return svg
  // Male user svg should be different than female svg with same seed

  describe('generateAvatarSVG', () => {
    it('should generate svg', () => {
      const testUser = UserStub.getStub('test@email.com');
      const generatedAvatar = service.generateAvatarSVG(testUser);
      expect(SvgTester.isValidSvg(generatedAvatar)).toEqual(true);
    });
  });
});
