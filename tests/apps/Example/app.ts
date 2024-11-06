import dotenv from 'dotenv';
import buildExampleApp from '@apps/Example/app';

dotenv.config();

const app = buildExampleApp({
  host: process.env.PRODUCTS_TEST_DB_HOST,
  user: process.env.PRODUCTS_TEST_DB_USER,
  password: process.env.PRODUCTS_TEST_DB_PASSWORD,
  database: process.env.PRODUCTS_TEST_DB_DATABASE,
  port: Number.parseInt(process.env.PRODUCTS_TEST_DB_PORT),
});

export default app;
