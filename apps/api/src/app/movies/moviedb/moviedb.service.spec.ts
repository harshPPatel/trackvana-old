import { Test, TestingModule } from '@nestjs/testing';
import { MoviedbService } from './moviedb.service';

describe('MoviedbService', () => {
  let service: MoviedbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviedbService],
    }).compile();

    service = module.get<MoviedbService>(MoviedbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
