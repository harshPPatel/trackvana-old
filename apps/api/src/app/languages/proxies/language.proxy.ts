import { Injectable } from '@nestjs/common';
import { RootProxy } from '../../utils/interfaces/root-proxy.interface';
import { Language } from '../entities/language.entity';

@Injectable()
export class LanguageProxy implements RootProxy<Language> {
  public createEntity(isoCode: string) {
    const languageEntity = new Language();
    languageEntity.isoCode = isoCode;
    return languageEntity;
  }
}
