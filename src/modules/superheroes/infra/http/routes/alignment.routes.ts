import { Router } from 'express';

import { AlignmentController } from '../controller/AlignmentController';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const AlignmentRouter = Router();
const alignmentController = new AlignmentController();

AlignmentRouter.post(
  '/',
  isAuth,
  alignmentController.create,
  /*  
    #swagger.tags = ['Alignment']
    #swagger.summary = 'Adiciona um novo Alignment ao sistema'
    #swagger.security = [{ "bearerAuth": [] }]
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "alignment": "AlignmentName"
      }
    }
    #swagger.responses[201] = {
      schema: {
        "alignment": "AlignmentName",
        "id": 5
      }
    }
  */
);

AlignmentRouter.get(
  '/:id',
  isAuth,
  alignmentController.findById,
  /*  
    #swagger.tags = ['Alignment']
    #swagger.summary = 'Busca um Alignment pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Alignment',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "id": 5,
        "alignment": "AlignmentName"
      }
    }
  */
);

AlignmentRouter.get(
  '/',
  isAuth,
  alignmentController.getAll,
  /*  
    #swagger.tags = ['Alignment']
    #swagger.summary = 'Busca todos os Alignments'
    #swagger.responses[200] = {
      schema: [
        {
          "id": 5,
          "alignment": "AlignmentName"
        }
      ]
    }
  */
);

AlignmentRouter.put(
  '/:id',
  isAuth,
  alignmentController.update,
  /*  
    #swagger.tags = ['Alignment']
    #swagger.summary = 'Atualiza um Alignment existente'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Alignment',
      required: true
    }
    #swagger.parameters['body'] = {
      in: 'body',
      schema: {
        "alignment": "AlignmentNameAtualizado"
      }
    }
    #swagger.responses[200] = {
      schema: {
        message: "Alignment updated successfully"
      }
    }
  */
);

AlignmentRouter.delete(
  '/:id',
  isAuth,
  alignmentController.delete,
  /*  
    #swagger.tags = ['Alignment']
    #swagger.summary = 'Deleta um Alignment pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'number',
      description: 'ID do Alignment',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "Alignment deleted successfully"
      }
    }
  */
);

export { AlignmentRouter };
