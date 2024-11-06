import Product from '@core/Products/Product/domain/Product';
import BrandBuilder from '../../Brand/domain/BrandBuilder';
import { faker } from '@faker-js/faker/locale/en';

export default class ProductBuilder {
  public static buildRandom(): Product {
    return new Product(faker.commerce.product(), BrandBuilder.buildRandom());
  }
}
