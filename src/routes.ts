/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheck from './modules/healthcheck';
import profile from './modules/profile';
import user from './modules/user';
import skills from './modules/skill';
import studies from './modules/studies';
import upload from './modules/upload';
import messages from './modules/message';
import proyects from './modules/project';
import sendEmail from './utils/emails';
import authLocal from './modules/auth/local';

function routes(app: Application) {
  app.use('/send-mail', sendEmail);
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/profile', profile);
  app.use('/api/users', user);
  app.use('/api/skills', skills);
  app.use('/api/studies', studies);
  app.use('/api/messages', messages);
  app.use('/api/proyects', proyects);
  app.use('/api/upload', upload);
  app.use('/auth/local', authLocal);
}

export default routes;
