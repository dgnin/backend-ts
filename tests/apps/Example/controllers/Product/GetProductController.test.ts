import ProductId from '@core/Products/Product/domain/ProductId';
import supertest from 'supertest';
import app from '../../app';
import httpStatus from 'http-status';

describe('GetProductController', () => {
  it("should return 404 if the Product doesn't exist", async () => {
    const productId = ProductId.createRandom();

    const res = await supertest(app).get(`/products/${productId.value}`);

    expect(res.status).toEqual(httpStatus.NOT_FOUND);
    expect(res.body).toEqual(httpStatus[httpStatus.NOT_FOUND]);
  });
});
