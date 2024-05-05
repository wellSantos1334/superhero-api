import { Router } from 'express';

import { PublisherController } from '../controller/PublisherController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const PublisherRouter = Router();
const publisherController = new PublisherController();

PublisherRouter.post(
  '/',
  isAuth,
  publisherController.create,
  /*  
    #swagger.tags = ['Publisher']
    #swagger.summary = 'Adiciona um novo Publisher ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "publisher": "PublisherName"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "publisher": "PublisherName",
        "id": 26
      }
    }
  */
);

PublisherRouter.get(
  '/:id',
  isAuth,
  publisherController.findById,
  /*  
    #swagger.tags = ['Publisher']
    #swagger.summary = 'Busca um Publisher pelo ID'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Publisher',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 26,
        "publisher": "PublisherName"
      }
    }
  */
);

PublisherRouter.get(
  '/',
  isAuth,
  publisherController.getAll,
  /*  
    #swagger.tags = ['Publisher']
    #swagger.summary = 'Busca todos os Publishers'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.responses[200] = {
      schema: [
        {
          "id": 62,
          "publisher": "PublisherName"
        }
      ]
    }
  */
);

PublisherRouter.put(
  '/:id',
  isAuth,
  publisherController.update,
  /*  
    #swagger.tags = ['Publisher']
    #swagger.summary = 'Atualiza um Publisher existente'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Publisher',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "publisher": "PublisherNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Publisher updated successfully"
      }
    }
  */
);

PublisherRouter.delete(
  '/:id',
  isAuth,
  publisherController.delete,
  /*  
    #swagger.tags = ['Publisher']
    #swagger.summary = 'Deleta um Publisher pelo ID'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Publisher',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Publisher deleted successfully"
      }
    }
  */
);

export { PublisherRouter };
