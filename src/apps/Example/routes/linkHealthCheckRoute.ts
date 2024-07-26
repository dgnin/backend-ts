import { getHealthCheckController } from '@apps/Example/dependency-injection';
import { Express } from 'express';

export default function linkHealthCheckRoute(app: Express): void {
  app.get('/health-check', getHealthCheckController);
}
