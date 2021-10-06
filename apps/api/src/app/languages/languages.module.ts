import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './entities/language.entity';
import { LanguageProxy } from './proxies/language.proxy';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageProxy],
  exports: [LanguageProxy],
})
export class LanguageModule {}
