import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AdminUserStub } from '../stubs/admin-user.stub';

@Injectable()
export class UsersService {
  async findOneByEmail(email: string): Promise<User> {
    return await AdminUserStub.getStub(email);
  }

  async create(newUser: User): Promise<User> {
    return await AdminUserStub.getStub(newUser.email);
  }
}
