/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheck from './modules/healthcheck';
import user from './modules/user';
import skills from './modules/skill';
import studies from './modules/studies';
import upload from './modules/upload';
import message from './modules/message';
import authLocal from './modules/auth/local';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/skills', skills);
  app.use('/api/studies', studies);
  app.use('/api/message', message);
  app.use('/api/upload', upload);
  app.use('/auth/local', authLocal);
}

export default routes;
