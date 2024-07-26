import app from '../app';
import httpStatus from 'http-status';
import supertest from 'supertest';

describe('getHealthCheckController', () => {
  it('should return 200 if everything works', async () => {
    const res = await supertest(app).get('/health-check');

    expect(res.status).toEqual(httpStatus.OK);
    expect(res.body).toEqual(httpStatus[httpStatus.OK]);
  });
});
