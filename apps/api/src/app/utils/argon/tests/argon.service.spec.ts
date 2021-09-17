import { Test, TestingModule } from '@nestjs/testing';
import { ArgonService } from '../argon.service';

describe('ArgonService', () => {
  let service: ArgonService;
  const testString = 'thisisateststring';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArgonService],
    }).compile();

    service = module.get<ArgonService>(ArgonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create same hash for same strings', async () => {
    const hashedTestString = await service.hash(testString);
    expect(hashedTestString).toEqual(expect.any(String));
  });
});
