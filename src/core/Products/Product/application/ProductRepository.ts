import Product from '@core/Products/Product/domain/Product';
import ProductId from '@core/Products/Product/domain/ProductId';

export default interface ProductRepository {
  find(id: ProductId): Promise<Product | null>;
  findAll(): Promise<Product[]>;
}
