import { Router } from 'express';

import { RaceController } from '../controller/RaceController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const RaceRouter = Router();
const raceController = new RaceController();

RaceRouter.post(
  '/',
  isAuth,
  raceController.create,
  /*  
    #swagger.tags = ['Race']
    #swagger.summary = 'Adiciona um novo Race ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "race": "RaceName"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "race": "RaceName",
        "id": 62
      }
    }
  */
);

RaceRouter.get(
  '/:id',
  isAuth,
  raceController.findById,
  /*  
    #swagger.tags = ['Race']
    #swagger.summary = 'Busca um Race pelo ID'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Race',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 62,
        "race": "RaceName"
      }
    }
  */
);

RaceRouter.get(
  '/',
  isAuth,
  raceController.getAll,
  /*  
    #swagger.tags = ['Race']
    #swagger.summary = 'Busca todos os Races'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.responses[200] = {
      schema: [
        {
          "id": 62,
          "race": "RaceName"
        }
      ]
    }
  */
);

RaceRouter.put(
  '/:id',
  isAuth,
  raceController.update,
  /*  
    #swagger.tags = ['Race']
    #swagger.summary = 'Atualiza um Race existente'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Race',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "race": "RaceNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Race updated successfully"
      }
    }
  */
);

RaceRouter.delete(
  '/:id',
  isAuth,
  raceController.delete,
  /*  
    #swagger.tags = ['Race']
    #swagger.summary = 'Deleta um Race pelo ID'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Race',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Race deleted successfully"
      }
    }
  */
);

export { RaceRouter };
