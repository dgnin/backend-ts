import supertest from 'supertest';
import app from '../../app';
import httpStatus from 'http-status';

describe('GetProductsController', () => {
  it('should return 200', async () => {
    const res = await supertest(app).get(`/products`);

    expect(res.status).toEqual(httpStatus.OK);
  });
});
