import Brand from '@core/Products/Brand/domain/Brand';
import { faker } from '@faker-js/faker/locale/en';

export default class BrandBuilder {
  public static buildRandom(): Brand {
    return new Brand(faker.word.noun());
  }
}
