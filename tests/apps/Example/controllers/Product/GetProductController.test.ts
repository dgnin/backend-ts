import ProductId from '@core/Products/Product/domain/ProductId';
import supertest from 'supertest';
import app from '../../app';
import httpStatus from 'http-status';
import ProductBuilder from '../../../../core/Products/Product/domain/ProductBuilder';

describe('GetProductController', () => {
  it("should return 404 if the Product doesn't exist", async () => {
    const productId = ProductId.createRandom();

    const res = await supertest(app).get(`/products/${productId.value}`);

    expect(res.status).toEqual(httpStatus.NOT_FOUND);
    expect(res.body).toEqual(httpStatus[httpStatus.NOT_FOUND]);
  });

  it('should return the Product if it exists', async () => {
    const product = ProductBuilder.buildInTestDB();
    const res = await supertest(app).get(`/products/${product.id.value}`);

    expect(res.status).toEqual(httpStatus.OK);
  });
});
