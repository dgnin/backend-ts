import Entity from '@core/shared/domain/base/Entity';
import BrandId from '@core/Products/Brand/domain/BrandId';

export default class Brand extends Entity {
  constructor(
    readonly name: string,
    id?: BrandId,
  ) {
    super(id);
  }
}
