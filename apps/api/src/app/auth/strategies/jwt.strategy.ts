import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { JwtPayload } from '../../utils/interfaces/jwt-payload.interface';
import { AuthConstants } from '../auth.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: AuthConstants.JWT_TOKEN_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    const user = this.usersService.findOneByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedException('The User is invalid');
    }
    return user;
  }
}
