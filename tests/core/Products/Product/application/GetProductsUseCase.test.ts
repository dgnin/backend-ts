import GetProductsUseCase from '@core/Products/Product/application/GetProductsUseCase';
import ProductBuilder from '../domain/ProductBuilder';
import Product from '@core/Products/Product/domain/Product';
import { mock, MockProxy } from 'jest-mock-extended';
import ProductRepository from '@core/Products/Product/application/ProductRepository';

describe('GetProductsUseCase', () => {
  let repository: MockProxy<ProductRepository>;
  let subject: GetProductsUseCase;

  beforeEach(() => {
    repository = mock<ProductRepository>();
    subject = new GetProductsUseCase(repository);
  });

  it('should return all Products', async () => {
    const expectedProducts = sort([
      ProductBuilder.buildRandom(),
      ProductBuilder.buildRandom(),
      ProductBuilder.buildRandom(),
    ]);
    repository.findAll.mockResolvedValue(expectedProducts);

    const products = await subject.execute();

    expect(sort(products)).toEqual(expectedProducts);
  });

  function sort(products: Product[]): Product[] {
    return products.sort((productA, productB) =>
      productA.id.value.localeCompare(productB.id.value),
    );
  }
});
