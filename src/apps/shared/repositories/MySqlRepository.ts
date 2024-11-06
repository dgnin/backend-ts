import mysql, { Pool, PoolOptions } from 'mysql2/promise';

export default abstract class MySqlRepository {
  protected readonly pool: Pool;

  constructor(config: PoolOptions) {
    this.pool = mysql.createPool(config);
  }
}
