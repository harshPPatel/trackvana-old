import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserStub } from './stubs/user.stub';

describe('UsersService', () => {
  let service: UsersService;
  const testEmail = 'test@email.com';
  // let usersRepository: Repository<User>;

  const mockUserRepo = {
    findOne: jest.fn(({ email }) => Promise.resolve(UserStub.getStub(email))),
    save: jest.fn((user: User) =>
      Promise.resolve(UserStub.getStub(user.email))
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepo,
        },
      ],
    }).compile();

    service = await module.get<UsersService>(UsersService);
    // usersRepository = await module.get(getRepositoryToken(User))''
  });

  afterEach(() => jest.clearAllMocks());

  describe('findOneByEmail', () => {
    it('should call userRepository.findOne with provided email', async () => {
      const findOneSpy = jest.spyOn(mockUserRepo, 'findOne');

      const user = await service.findOneByEmail(testEmail);

      expect(user).toEqual(await UserStub.getStub(testEmail));
      expect(findOneSpy).toHaveBeenCalledWith({
        email: testEmail,
      });
      expect(user.email).toEqual(testEmail);
    });
  });

  describe('create', () => {
    it('should call userRepository.create with new user', async () => {
      const saveSpy = jest.spyOn(mockUserRepo, 'save');
      const testUser = await UserStub.getStub(testEmail);

      const newUser = await service.create(testUser);

      expect(newUser).toEqual(await UserStub.getStub(testEmail));
      expect(saveSpy).toHaveBeenCalledWith(testUser);
      expect(newUser.email).toEqual(testEmail);
    });
  });
});
