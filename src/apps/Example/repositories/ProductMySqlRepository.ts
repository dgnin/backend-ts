import ProductRepository from '../../../core/Products/Product/application/ProductRepository';
import ProductId from '@core/Products/Product/domain/ProductId';
import Product from '@core/Products/Product/domain/Product';
import { RowDataPacket } from 'mysql2';
import MySqlRepository from '@apps/shared/repositories/MySqlRepository';
import { UUID } from 'crypto';
import ProductMapper from '@apps/Example/mappers/ProductMapper';

export default class ProductMySqlRepository extends MySqlRepository implements ProductRepository {
  public async find(id: ProductId): Promise<Product | null> {
    const pool = this.createPool();
    const [productRows] = await pool.query<ProductMySqlRow[]>(
      `
        SELECT p.id, p.name, b.id AS brandId, b.name as brandName
        FROM products p
        INNER JOIN brands b ON b.id = p.brand_id
        WHERE p.id = ?;
      `,
      [id.value],
    );
    await pool.end();

    if (!productRows.length) {
      return null;
    }

    return ProductMapper.fromMySqlToDomain(productRows[0]);
  }

  public async findAll(): Promise<Product[]> {
    const pool = this.createPool();
    const [productRows] = await pool.query<ProductMySqlRow[]>(
      `
        SELECT p.id, p.name, b.id AS brandId, b.name as brandName
        FROM products p
        INNER JOIN brands b ON b.id = p.brand_id;
      `,
    );
    await pool.end();

    return productRows.map((productRow) => ProductMapper.fromMySqlToDomain(productRow));
  }
}

export interface ProductMySqlRow extends RowDataPacket {
  id: UUID;
  name: string;
  brandId: UUID;
  brandName: string;
}
