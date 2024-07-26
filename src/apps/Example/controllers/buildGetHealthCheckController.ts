import { RequestHandler } from 'express';
import httpStatus from 'http-status';

export default function buildGetHealthCheckController(): RequestHandler {
  return (req, res) => {
    res.json(httpStatus[httpStatus.OK]).status(httpStatus.OK);
  };
}
