import { Router } from 'express';

import { UsersController } from '../controller/UsersController';
import { upload } from '../../../../../shared/container/providers/multer/multer';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

const UsersRouter = Router();
const usersController = new UsersController();

UsersRouter.post(
  '/',
  upload.single('profilePhoto'),
  usersController.createUser,
  /*  
    #swagger.tags = ['Users']
    #swagger.summary = 'Adiciona um novo User ao sistema'
    #swagger.parameters['name'] = {
      in: 'formData',
      type: 'string',
      description: 'Nome do usuário',
      required: true
    }
    #swagger.parameters['email'] = {
    in: 'formData',
    type: 'string',
    description: 'Endereço de e-mail do usuário',
    required: true
    }
    #swagger.parameters['password'] = {
      in: 'formData',
      type: 'string',
      description: 'Senha do usuário',
      required: true
    }
    #swagger.parameters['confirmPassword'] = {
      in: 'formData',
      type: 'string',
      description: 'Confirmação de senha do usuário',
      required: true
    }
    #swagger.parameters['biography'] = {
      in: 'formData',
      type: 'string',
      description: 'Biografia do usuário',
      required: false
    }
    #swagger.parameters['profilePhoto'] = {
      in: 'formData',
      type: 'file',
      description: 'Foto de perfil do usuário',
      required: false
    }
    #swagger.responses[201] = {
      schema: {
        "cpf": "12220030040",
        "name": "Wellington",
        "email": "welll@teste.com",
        "profilePhoto": "80fab12a-c440-4622-9231-972f1831f1c4.teste.png",
        "biography": "Biografia",
        "id": "c8a52a75-2599-4bc2-b700-83c80af968f3",
        "updatedAt": "2024-05-01T19:49:04.025Z",
        "createdAt": "2024-05-01T19:49:04.025Z"
      }
    }
  */
);

UsersRouter.get(
  '/:id',
  isAuth,
  usersController.findById,
  /*  
    #swagger.tags = ['Users']
    #swagger.summary = 'Busca um User pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      description: 'ID do usuário',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        "cpf": "12220030040",
        "name": "Wellington",
        "email": "welll@teste.com",
        "profilePhoto": "80fab12a-c440-4622-9231-972f1831f1c4.teste.png",
        "biography": "Biografia",
        "id": "c8a52a75-2599-4bc2-b700-83c80af968f3",
        "updatedAt": "2024-05-01T19:49:04.025Z",
        "createdAt": "2024-05-01T19:49:04.025Z"
      }
    }
  */
);

UsersRouter.get(
  '/',
  isAuth,
  usersController.getAll,
  /*  
    #swagger.tags = ['Users']
    #swagger.summary = 'Busca todos os User'
    #swagger.responses[200] = {
      schema: {
        "cpf": "12220030040",
        "name": "Wellington",
        "email": "welll@teste.com",
        "profilePhoto": "80fab12a-c440-4622-9231-972f1831f1c4.teste.png",
        "biography": "Biografia",
        "id": "c8a52a75-2599-4bc2-b700-83c80af968f3",
        "updatedAt": "2024-05-01T19:49:04.025Z",
        "createdAt": "2024-05-01T19:49:04.025Z"
      }
    }
  */
);

UsersRouter.put(
  '/:id',
  isAuth,
  upload.single('profilePhoto'),
  usersController.updateUser,
  /*  
    #swagger.tags = ['Users']
    #swagger.summary = 'Adiciona um novo User ao sistema'
    #swagger.parameters['name'] = {
      in: 'formData',
      type: 'string',
      description: 'Nome do usuário',
      required: true
    }
    #swagger.parameters['email'] = {
    in: 'formData',
    type: 'string',
    description: 'Endereço de e-mail do usuário',
    required: true
    }
    #swagger.parameters['password'] = {
      in: 'formData',
      type: 'string',
      description: 'Senha do usuário',
      required: true
    }
    #swagger.parameters['confirmPassword'] = {
      in: 'formData',
      type: 'string',
      description: 'Confirmação de senha do usuário',
      required: true
    }
    #swagger.parameters['biography'] = {
      in: 'formData',
      type: 'string',
      description: 'Biografia do usuário',
      required: false
    }
    #swagger.parameters['profilePhoto'] = {
      in: 'formData',
      type: 'file',
      description: 'Foto de perfil do usuário',
      required: false
    }
    #swagger.responses[201] = {
      schema: {
        message: "User updated successfully"
      }
    }
  */
);

UsersRouter.delete(
  '/:id',
  isAuth,
  usersController.delete,
  /*  
    #swagger.tags = ['Users']
    #swagger.summary = 'Deleta um User pelo ID'
    #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      description: 'ID do usuário',
      required: true
    }
    #swagger.responses[200] = {
      schema: {
        message: "User deleted successfully"
      }
    }
  */
);

export { UsersRouter };
