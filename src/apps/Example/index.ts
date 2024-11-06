import dotenv from 'dotenv';
import 'express-async-errors';
import buildExampleApp from '@apps/Example/app';

dotenv.config();

const app = buildExampleApp({
  host: process.env.PRODUCTS_DB_HOST,
  user: process.env.PRODUCTS_DB_USER,
  password: process.env.PRODUCTS_DB_PASSWORD,
  database: process.env.PRODUCTS_DB_DATABASE,
  port: Number.parseInt(process.env.PRODUCTS_DB_PORT),
});

app.listen(process.env.EXAMPLE_APP_PORT);
