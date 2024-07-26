import express from 'express';
import config from '@apps/Example/config';

const app = express();

config(app);

export default app;
