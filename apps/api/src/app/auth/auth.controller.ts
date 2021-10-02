import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from '../utils/decorators/is-public.decorator';
import { ProtectedRequest } from '../utils/interfaces/protected-request.interface';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginResponse } from './interfaces/login-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: ProtectedRequest): Promise<LoginResponse> {
    return await this.authService.loginUser(req.user);
  }
}
