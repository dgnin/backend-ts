import Product from '@core/Products/Product/domain/Product';
import BrandBuilder from '../../Brand/domain/BrandBuilder';
import { faker } from '@faker-js/faker/locale/en';
import ProductId from '@core/Products/Product/domain/ProductId';

export default class ProductBuilder {
  public static buildRandom(): Product {
    return new Product(faker.commerce.product(), BrandBuilder.buildRandom());
  }

  public static buildInTestDB(): Product {
    return new Product(
      'Product 1',
      BrandBuilder.buildInTestDB(),
      new ProductId('666d53cc-76f4-410c-9777-f7adc6bd14c8'),
    );
  }
}
