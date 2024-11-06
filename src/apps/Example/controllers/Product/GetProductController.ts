import { Request, Response } from 'express';
import Controller from '@apps/shared/controllers/Controller';
import ProductMapper, { ProductDTO } from '@apps/Example/mappers/ProductMapper';
import GetProductUseCase from '@core/Products/Product/application/GetProductUseCase';

export default class GetProductController implements Controller {
  constructor(private getProductUseCase: GetProductUseCase) {}

  public async execute(req: Request<{ id: string }>, res: Response<ProductDTO>): Promise<void> {
    const product = await this.getProductUseCase.execute(req.params.id);
    const productDTO = ProductMapper.fromDomainToDTO(product);
    res.json(productDTO);
  }
}
