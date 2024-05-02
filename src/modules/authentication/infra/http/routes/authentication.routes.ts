import { Router } from 'express';

import { AuthenticationController } from '../controller';

const AuthenticationRouter = Router();
const authenticationController = new AuthenticationController();

AuthenticationRouter.post(
  '/',
  authenticationController.login,
  /*  #swagger.tags = ['Authentication']
      #swagger.summary = 'Realiza o login de um usuário utilizando o e-mail OU cpf'
      #swagger.parameters['body'] = {
        in: 'body',
        schema: {
          "email": "email@gmail.com",
          "cpf": "12250060030",
          "password": "password"
        }
      }
      #swagger.responses[200] = {
        schema: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cC",
          "user": {
            "cpf": "12250060030",
            "userId": "2a41a504-1f97-4a96-814d-244033089610",
            "name": "Usuario",
            "email": "email@gmail.com",
          }
        }
      }
  */
);

export { AuthenticationRouter };