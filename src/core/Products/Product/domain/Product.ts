import Entity from '@core/shared/domain/base/Entity';
import ProductId from '@core/Products/Product/domain/ProductId';
import Brand from '@core/Products/Brand/domain/Brand';

export default class Product extends Entity {
  constructor(
    readonly name: string,
    readonly brand: Brand,
    id?: ProductId,
  ) {
    super(id);
  }
}
