export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXAMPLE_APP_PORT: string;
    }
  }
}
