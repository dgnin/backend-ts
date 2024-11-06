import { Express, Router } from 'express';
import { PoolOptions } from 'mysql2/promise';
import ProductMySqlRepository from '@apps/Example/repositories/ProductMySqlRepository';
import configGetProducts from '@apps/Example/config/products/get-products';
import configGetProduct from '@apps/Example/config/products/get-product';

export default function configProducts(app: Express, dbOptions: PoolOptions): void {
  const router = Router();
  app.use('/products', router);

  const productRepository = new ProductMySqlRepository(dbOptions);

  configGetProducts(router, productRepository);
  configGetProduct(router, productRepository);
}
