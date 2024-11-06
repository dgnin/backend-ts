import ProductRepository from '@core/Products/Product/application/ProductRepository';
import Product from '@core/Products/Product/domain/Product';

export default class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  public async execute(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
