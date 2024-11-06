import { Router } from 'express';
import ProductRepository from '@core/Products/Product/application/ProductRepository';
import GetProductsController from '@apps/Example/controllers/Product/GetProductsController';
import GetProductsUseCase from '@core/Products/Product/application/GetProductsUseCase';

export default function configGetProducts(
  router: Router,
  productRepository: ProductRepository,
): void {
  const getProductsUseCase = new GetProductsUseCase(productRepository);
  const getProductsController = new GetProductsController(getProductsUseCase);
  router.get('/', (req, res) => getProductsController.execute(req, res));
}
