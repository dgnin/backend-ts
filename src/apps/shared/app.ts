import express, { ErrorRequestHandler, Express } from 'express';
import DomainError from '@core/shared/domain/base/DomainError';
import httpStatus from 'http-status';

export default function buildDefaultApp(): Express {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  return app;
}

export const defaultErrorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
  if (res.headersSent || !(err instanceof DomainError)) {
    next(err);
    return;
  }

  const errorCode = err.dev;

  res.status(errorCode).json(httpStatus[errorCode]);
};
