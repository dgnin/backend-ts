import Brand from '@core/Products/Brand/domain/Brand';
import { faker } from '@faker-js/faker/locale/en';
import BrandId from '@core/Products/Brand/domain/BrandId';

export default class BrandBuilder {
  public static buildRandom(): Brand {
    return new Brand(faker.word.noun());
  }

  public static buildInTestDB(): Brand {
    return new Brand('Brand 1', new BrandId('aca8cca3-15e7-4f87-90ef-13879b33ab9e'));
  }
}
