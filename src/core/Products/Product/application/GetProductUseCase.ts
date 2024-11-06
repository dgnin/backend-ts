import ProductRepository from '@core/Products/Product/application/ProductRepository';
import Product from '@core/Products/Product/domain/Product';
import ProductId from '@core/Products/Product/domain/ProductId';
import { UUID } from 'crypto';
import NotFoundError from '@core/shared/domain/base/NotFoundError';

export default class GetProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async execute(idValue: string): Promise<Product> {
    const id = new ProductId(idValue as UUID);
    const product = await this.productRepository.find(id);

    if (product === null) {
      throw new NotFoundError(`Id ${id.value} doesn't match any Product.`);
    }

    return product;
  }
}
