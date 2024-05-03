import { Router } from 'express';

import { GenderController } from '../controller/GenderController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const GenderRouter = Router();
const genderController = new GenderController();

GenderRouter.post(
  '/',
  isAuth,
  genderController.create,
  /*  
    #swagger.tags = ['Gender']
    #swagger.summary = 'Adiciona um novo Gender ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "gender": "GenderName"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "gender": "GenderName",
        "id": 4
      }
    }
  */
);

GenderRouter.get(
  '/:id',
  isAuth,
  genderController.findById,
  /*  
    #swagger.tags = ['Gender']
    #swagger.summary = 'Busca um Gender pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Gender',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 4,
        "gender": "GenderName"
      }
    }
  */
);

GenderRouter.get(
  '/',
  isAuth,
  genderController.getAll,
  /*  
    #swagger.tags = ['Gender']
    #swagger.summary = 'Busca todos os Genders'
    #swagger.responses[200] = {
      schema: [
        {
          "id": 4,
          "gender": "GenderName"
        }
      ]
    }
  */
);

GenderRouter.put(
  '/:id',
  isAuth,
  genderController.update,
  /*  
    #swagger.tags = ['Gender']
    #swagger.summary = 'Atualiza um Gender existente'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Gender',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "gender": "GenderNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Gender updated successfully"
      }
    }
  */
);

GenderRouter.delete(
  '/:id',
  isAuth,
  genderController.delete,
  /*  
    #swagger.tags = ['Gender']
    #swagger.summary = 'Deleta um Gender pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Gender',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Gender deleted successfully"
      }
    }
  */
);

export { GenderRouter };
