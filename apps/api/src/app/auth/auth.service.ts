import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { ArgonService } from '../utils/argon/argon.service';
import { JwtPayload } from '../utils/interfaces/jwt-payload.interface';
import { LoginResponse } from './interfaces/login-response.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly argonService: ArgonService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const dbUser = await this.usersService.findOneByEmail(email);
    if (!dbUser) {
      return null;
    }

    const isValidPassword = await this.argonService.verify(
      dbUser.password,
      password
    );
    if (!isValidPassword) {
      return null;
    }

    return dbUser;
  }

  async loginUser(user: User): Promise<LoginResponse> {
    const jwtPayload: JwtPayload = { email: user.email, isAdmin: user.isAdmin };
    const token = await this.jwtService.sign(jwtPayload);
    return {
      user,
      accessToken: token,
    };
  }
}
