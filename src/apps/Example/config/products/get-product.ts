import { Router } from 'express';
import ProductRepository from '@core/Products/Product/application/ProductRepository';
import GetProductUseCase from '@core/Products/Product/application/GetProductUseCase';
import GetProductController from '@apps/Example/controllers/Product/GetProductController';

export default function configGetProduct(
  router: Router,
  productRepository: ProductRepository,
): void {
  const getProductUseCase = new GetProductUseCase(productRepository);
  const getProductController = new GetProductController(getProductUseCase);
  router.get('/:id', (req, res) => getProductController.execute(req, res));
}
