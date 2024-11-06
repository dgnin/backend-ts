import { Request, Response } from 'express';
import httpStatus from 'http-status';
import Controller from '@apps/shared/controllers/Controller';

export default class HealthCheckController implements Controller {
  public execute(req: Request, res: Response<string>): void {
    res.status(200).json(httpStatus[httpStatus.OK]);
  }
}
