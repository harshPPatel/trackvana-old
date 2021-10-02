import { Request } from 'express';
import { User } from '../../users/entities/user.entity';

export interface ProtectedRequest extends Request {
  user: User;
}
