import { ProductionCompaniesDetails } from '../../movies/interfaces/tmdb-movie-details.interface';
import { RootProxy } from '../../utils/interfaces/root-proxy.interface';
import { ProductionCompany } from '../entities/production-company.entity';

export class ProductionCompanyProxy implements RootProxy<ProductionCompany> {
  createEntity(productionCompanyDetails: ProductionCompaniesDetails) {
    const productionEntity = new ProductionCompany();
    productionEntity.name = productionCompanyDetails.name;
    productionEntity.logoPath = productionCompanyDetails.logo_path || null;
    productionEntity.originCountry = productionCompanyDetails.origin_country;
    productionEntity.tmdbId = productionCompanyDetails.id;
    return productionEntity;
  }

  createEntities(productionCompaniesDetails: ProductionCompaniesDetails[]) {
    const productionCompaniesEntites: ProductionCompany[] = [];

    productionCompaniesDetails.forEach((productionCompanyDetails) => {
      const proudctionCompanyEntity = this.createEntity(
        productionCompanyDetails
      );
      productionCompaniesEntites.push(proudctionCompanyEntity);
    });

    return productionCompaniesEntites;
  }
}
