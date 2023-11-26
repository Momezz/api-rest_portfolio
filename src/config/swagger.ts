import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Request, Response, Application } from 'express';

import { version } from '../../package.json';
import log from '../logger';

const ext = process.env.NODE_ENV === 'production' ? '.js' : '.ts';

const routesApi = path.join(__dirname, `../modules/**/index${ext}`);
const schemasApi = path.join(__dirname, `../modules/**/**.schema${ext}`);

const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API Documentation',
      version,
      description: 'API Documentation portfolio',
      license: {
        name: 'MIT',
        url: 'https://choosealicense.com/licenses/mit/',
      },
      contact: {
        name: 'Julian Gomez Mejia',
        url: 'https://next-portfolio-momezz.vercel.app/',
        email: 'julgomez14@gmail.com',
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          in: 'header',
        },
      },
    },
    // Only for all endpoints
    // security: [
    //   {
    //     bearerAuth: [],
    //   },
    // ],
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server',
      },
      {
        url: process.env.BASE_URL || 'http://localhost:8080',
        description: 'Production server',
      },
    ],
  },
  apis: [routesApi, schemasApi],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Application, port: number) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON Format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  const url = `${process.env.BASE_URL}/docs` || `http://localhost:${port}/docs`;

  log.info(`Docs 📃🛠  available at ${url}`);
}

export default swaggerDocs;
