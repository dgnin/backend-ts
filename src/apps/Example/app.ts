import buildDefaultApp, { defaultErrorHandler } from '@apps/shared/app';
import { Express } from 'express';
import { PoolOptions } from 'mysql2/promise';
import config from '@apps/Example/config/config';

export default function buildExampleApp(dbOptions: PoolOptions): Express {
  const app = buildDefaultApp();

  config(app, dbOptions);

  app.use(defaultErrorHandler);

  return app;
}
