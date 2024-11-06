export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXAMPLE_APP_PORT: string;

      PRODUCTS_DB_HOST: string;
      PRODUCTS_DB_USER: string;
      PRODUCTS_DB_PASSWORD: string;
      PRODUCTS_DB_DATABASE: string;
      PRODUCTS_DB_PORT: string;
      PRODUCTS_TEST_DB_HOST: string;
      PRODUCTS_TEST_DB_USER: string;
      PRODUCTS_TEST_DB_PASSWORD: string;
      PRODUCTS_TEST_DB_DATABASE: string;
      PRODUCTS_TEST_DB_PORT: string;
    }
  }
}
