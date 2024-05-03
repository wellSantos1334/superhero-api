import { Router } from 'express';

import { SuperpowerController } from '../controller/SuperpowerController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const SuperpowerRouter = Router();
const superpowerController = new SuperpowerController();

SuperpowerRouter.post(
  '/',
  isAuth,
  superpowerController.create,
  /*  
    #swagger.tags = ['Superpower']
    #swagger.summary = 'Adiciona um novo Superpower ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "powerName": "NovoPowerName"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "powerName": "NovoPowerName",
        "id": 168
      }
    }
  */
);

SuperpowerRouter.get(
  '/:id',
  isAuth,
  superpowerController.findById,
  /*  
    #swagger.tags = ['Superpower']
    #swagger.summary = 'Busca um Superpower pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Superpower',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 168,
        "powerName": "NovoPowerName"
      }
    }
  */
);

SuperpowerRouter.get(
  '/',
  isAuth,
  superpowerController.getAll,
  /*  
    #swagger.tags = ['Superpower']
    #swagger.summary = 'Busca todos os Superpowers'
    #swagger.responses[200] = {
      schema: [
        {
          "id": 168,
          "powerName": "NovoPowerName"
        }
      ]
    }
  */
);

SuperpowerRouter.put(
  '/:id',
  isAuth,
  superpowerController.update,
  /*  
    #swagger.tags = ['Superpower']
    #swagger.summary = 'Atualiza um Superpower existente'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Superpower',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "powerName": "PowerNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Superpower updated successfully"
      }
    }
  */
);

SuperpowerRouter.delete(
  '/:id',
  isAuth,
  superpowerController.delete,
  /*  
    #swagger.tags = ['Superpower']
    #swagger.summary = 'Deleta um Superpower pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Superpower',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Superpower deleted successfully"
      }
    }
  */
);

export { SuperpowerRouter };
