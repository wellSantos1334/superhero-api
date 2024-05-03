import { Router } from 'express';

import { AttributeController } from '../controller/AttributeController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const AttributeRouter = Router();
const attributeController = new AttributeController();

AttributeRouter.post(
  '/',
  isAuth,
  attributeController.create,
  /*  
    #swagger.tags = ['Attribute']
    #swagger.summary = 'Adiciona um novo Attribute ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "attributeName": "NovoAttribute"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "attributeName": "NovoAttribute",
        "id": 7
      }
    }
  */
);

AttributeRouter.get(
  '/:id',
  isAuth,
  attributeController.findById,
  /*  
    #swagger.tags = ['Attribute']
    #swagger.summary = 'Busca um Attribute pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Attribute',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 7,
        "attributeName": "attributeName"
      }
    }
  */
);

AttributeRouter.get(
  '/',
  isAuth,
  attributeController.getAll,
  /*  
    #swagger.tags = ['Attribute']
    #swagger.summary = 'Busca todos os Attributes'
    #swagger.responses[200] = {
      schema: [
        {
          "id": 1,
          "attributeName": "Intelligence"
        }
      ]
    }
  */
);

AttributeRouter.put(
  '/:id',
  isAuth,
  attributeController.update,
  /*  
    #swagger.tags = ['Attribute']
    #swagger.summary = 'Atualiza um Attribute existente'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Attribute',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "attributeName": "AttributeNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Attribute updated successfully"
      }
    }
  */
);

AttributeRouter.delete(
  '/:id',
  isAuth,
  attributeController.delete,
  /*  
    #swagger.tags = ['Attribute']
    #swagger.summary = 'Deleta um Attribute pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Attribute',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Attribute deleted successfully"
      }
    }
  */
);

export { AttributeRouter };
