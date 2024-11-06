import mysql, { Pool, PoolOptions } from 'mysql2/promise';

export default abstract class MySqlRepository {
  constructor(private readonly config: PoolOptions) {}

  protected createPool(): Pool {
    return mysql.createPool(this.config);
  }
}
