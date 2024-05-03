import { Router } from 'express';

import { ColourController } from '../controller/ColourController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const ColourRouter = Router();
const colourController = new ColourController();

ColourRouter.post(
  '/',
  isAuth,
  colourController.create,
  /*  
    #swagger.tags = ['Colour']
    #swagger.summary = 'Adiciona um novo Colour ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "colour": "ColourName"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "colour": "ColourName",
        "id": 36
      }
    }
  */
);

ColourRouter.get(
  '/:id',
  isAuth,
  colourController.findById,
  /*  
    #swagger.tags = ['Colour']
    #swagger.summary = 'Busca um Colour pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Colour',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 36,
        "colour": "ColourName"
      }
    }
  */
);

ColourRouter.get(
  '/',
  isAuth,
  colourController.getAll,
  /*  
    #swagger.tags = ['Colour']
    #swagger.summary = 'Busca todos os Colours'
    #swagger.responses[200] = {
      schema: [
        {
          "id": 36,
          "colour": "ColourName"
        }
      ]
    }
  */
);

ColourRouter.put(
  '/:id',
  isAuth,
  colourController.update,
  /*  
    #swagger.tags = ['Colour']
    #swagger.summary = 'Atualiza um Colour existente'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Colour',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "colour": "ColourNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Colour updated successfully"
      }
    }
  */
);

ColourRouter.delete(
  '/:id',
  isAuth,
  colourController.delete,
  /*  
    #swagger.tags = ['Colour']
    #swagger.summary = 'Deleta um Colour pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Colour',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Colour deleted successfully"
      }
    }
  */
);

export { ColourRouter };
