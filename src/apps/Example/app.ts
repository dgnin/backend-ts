import app from '@apps/shared/app';
import config from '@apps/Example/config';

config(app).listen(process.env.EXAMPLE_APP_PORT);
