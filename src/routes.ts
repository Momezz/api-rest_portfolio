/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheck from './modules/healthcheck';
import user from './modules/user';
import skills from './modules/skill';
import authLocal from './modules/auth/local';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/skills', skills);
  app.use('/auth/local', authLocal);
}

export default routes;
