import GetProductUseCase from '@core/Products/Product/application/GetProductUseCase';
import ProductBuilder from '../domain/ProductBuilder';
import ProductId from '@core/Products/Product/domain/ProductId';
import NotFoundError from '@core/shared/domain/base/NotFoundError';
import { mock, MockProxy } from 'jest-mock-extended';
import ProductRepository from '@core/Products/Product/application/ProductRepository';

describe('GetProductUseCase', () => {
  let repository: MockProxy<ProductRepository>;
  let subject: GetProductUseCase;

  beforeEach(() => {
    repository = mock<ProductRepository>();
    subject = new GetProductUseCase(repository);
  });

  it("should throw NotFoundError if doesn't exist", async () => {
    const productId = ProductId.createRandom();
    repository.find.mockResolvedValue(null);

    await expect(async () => await subject.execute(productId.value)).rejects.toThrow(NotFoundError);
    expect(repository.find.calledWith(productId));
  });

  it('should return Product if exists', async () => {
    const expectedProduct = ProductBuilder.buildRandom();
    repository.find.mockResolvedValue(expectedProduct);

    const product = await subject.execute(expectedProduct.id.value);

    expect(repository.find.calledWith(expectedProduct.id));
    expect(product).toBe(expectedProduct);
  });
});
