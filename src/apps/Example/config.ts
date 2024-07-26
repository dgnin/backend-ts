import { Express } from 'express';

export default function config(app: Express): Express {
  linkRoutes(app);

  return app;
}

function linkRoutes(app: Express): void {
}
