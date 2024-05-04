import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import '../typeorm';
import '../../container';

import { connectMongo } from '../mongo';
import { ErrorRequestHandler } from '../../errors/error-handler';
import swaggerFile from '../../../../swagger/swagger_output.json';
import { logger } from '../../container/providers/logger';
import { redisConnect } from '../redis';

import { router } from './routes/router';

redisConnect()
  .then(() => logger.info('🌳 Redis Connected'))
  .catch((error) => logger.error(`⛔ Erro ao conectar Redis: ${error}`));

connectMongo()
  .then(() => logger.info('🌳 Mongo Connected'))
  .catch((error) => logger.error(`⛔ Erro ao conectar Mongo: ${error}`));

const app = express();

app.use(express.json({ limit: '200mb' }));
app.use(cors());
app.use('/api', router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(ErrorRequestHandler);

export { app };
