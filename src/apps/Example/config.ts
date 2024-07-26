import { Express } from 'express';
import linkHealthCheckRoute from '@apps/Example/routes/linkHealthCheckRoute';

export default function config(app: Express): Express {
  linkRoutes(app);

  return app;
}

function linkRoutes(app: Express): void {
  linkHealthCheckRoute(app);
}
