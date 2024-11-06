import DTO from '@apps/shared/mappers/DTO';
import { UUID } from 'crypto';
import BrandMapper, { BrandDTO } from '@apps/Example/mappers/BrandMapper';
import Product from '@core/Products/Product/domain/Product';
import { ProductMySqlRow } from '@apps/Example/repositories/ProductMySqlRepository';
import ProductId from '@core/Products/Product/domain/ProductId';

export default class ProductMapper {
  public static fromDomainToDTO(product: Product): ProductDTO {
    return {
      id: product.id.value,
      name: product.name,
      brand: BrandMapper.fromDomainToDTO(product.brand),
    };
  }

  public static fromMySqlToDomain(productRow: ProductMySqlRow): Product {
    return new Product(
      productRow.name,
      BrandMapper.fromMySqlToDTO(productRow),
      new ProductId(productRow.id),
    );
  }
}

export interface ProductDTO extends DTO {
  id: UUID;
  name: string;
  brand: BrandDTO;
}
