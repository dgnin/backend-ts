import Brand from '@core/Products/Brand/domain/Brand';
import DTO from '@apps/shared/mappers/DTO';
import { UUID } from 'crypto';
import { ProductMySqlRow } from '@apps/Example/repositories/ProductMySqlRepository';
import BrandId from '@core/Products/Brand/domain/BrandId';

export default class BrandMapper {
  public static fromDomainToDTO(brand: Brand): BrandDTO {
    return {
      id: brand.id.value,
      name: brand.name,
    };
  }

  public static fromMySqlToDTO(productRow: ProductMySqlRow): Brand {
    return new Brand(productRow.brandName, new BrandId(productRow.brandId));
  }
}

export interface BrandDTO extends DTO {
  id: UUID;
  name: string;
}
