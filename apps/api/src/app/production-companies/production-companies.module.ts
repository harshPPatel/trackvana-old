import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionCompany } from './entities/production-company.entity';
import { ProductionCompanyProxy } from './proxies/production-company.proxy';

@Module({
  imports: [TypeOrmModule.forFeature([ProductionCompany])],
  providers: [ProductionCompanyProxy],
  exports: [ProductionCompanyProxy],
})
export class ProductionCompaniesModule {}
