import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '../app';

describe('HealthCheckController', () => {
  it('should return 200 if everything works', async () => {
    const res = await supertest(app).get('/health-check');

    expect(res.status).toEqual(httpStatus.OK);
    expect(res.body).toEqual(httpStatus[httpStatus.OK]);
  });
});
