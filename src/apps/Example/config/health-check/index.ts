import { Express } from 'express';
import HealthCheckController from '@apps/Example/controllers/HealthCheckController';

export default function configHealthCheck(app: Express): void {
  const healthCheckController = new HealthCheckController();
  app.get('/health-check', (req, res) => {
    healthCheckController.execute(req, res);
  });
}
