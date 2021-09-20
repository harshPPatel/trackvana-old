import { Injectable } from '@nestjs/common';
import { User } from '../../../users/entities/user.entity';

@Injectable()
export class DicebearService {
  generateAvatarSVG(user: User): string {
    return '<svg>Test SVG Element</svg>';
  }
}
