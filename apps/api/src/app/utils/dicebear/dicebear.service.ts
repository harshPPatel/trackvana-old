import { Injectable } from '@nestjs/common';

import * as miniavsStyle from '@dicebear/miniavs';
import { createAvatar, Options } from '@dicebear/avatars';
import { User } from '../../users/entities/user.entity';
import { UserGenders } from '../../users/enums/user-gender.enum';

@Injectable()
export class DicebearService {
  generateAvatarSVG(user: User): string {
    const seed = user.id + user.email;
    const options =
      user.gender === UserGenders.MALE
        ? this.getMaleOptions(seed)
        : this.getFemaleOptions(seed);

    return createAvatar(miniavsStyle, options);
  }

  private getFemaleOptions(seed): Partial<miniavsStyle.Options & Options> {
    return {
      seed,
      hair: ['ponyTail', 'long'],
      mustacheProbability: 0,
      blushesProbability: 70,
      glassesProbability: 70,
      skinColor: ['white'],
      mouth: ['default'],
      hairColor: ['brown', 'black'],
      eyes: ['confident', 'happy'],
    };
  }

  private getMaleOptions(seed): Partial<miniavsStyle.Options & Options> {
    return {
      seed,
      hair: ['stylish', 'elvis', 'classic02', 'classic01'],
      mustacheProbability: 70,
      blushesProbability: 20,
      glassesProbability: 70,
      skinColor: ['white'],
      mouth: ['default'],
      hairColor: ['brown', 'black'],
      eyes: ['confident', 'happy'],
    };
  }
}
