import { Test, TestingModule } from '@nestjs/testing';
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
});
