import { Express } from 'express';
import { PoolOptions } from 'mysql2/promise';
import configHealthCheck from '@apps/Example/config/health-check';
import configProducts from '@apps/Example/config/products';

export default function config(app: Express, dbOptions: PoolOptions): void {
  configHealthCheck(app);
  configProducts(app, dbOptions);
}
