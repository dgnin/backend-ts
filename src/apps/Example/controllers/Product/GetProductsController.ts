import { Request, Response } from 'express';
import Controller from '@apps/shared/controllers/Controller';
import ProductMapper, { ProductDTO } from '@apps/Example/mappers/ProductMapper';
import GetProductsUseCase from '@core/Products/Product/application/GetProductsUseCase';

export default class GetProductsController implements Controller {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  public async execute(req: Request, res: Response<ProductDTO[]>): Promise<void> {
    const products = await this.getProductsUseCase.execute();
    const productsDTO = products.map((product) => ProductMapper.fromDomainToDTO(product));
    res.json(productsDTO);
  }
}
