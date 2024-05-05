import { Router } from 'express';

import { AuthenticationController } from '../controller';
import { isAuth } from '../../../../../shared/infra/http/middlewares/IsAuth';

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
          "email": "email@teste.com",
          "cpf": "12250060040",
          "password": "123123@Ssr"
        }
      }
      #swagger.responses[200] = {
        schema: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cC",
          "user": {
            "cpf": "12250060040",
            "userId": "a606d75b-2cc4-451a-85ed-9a31fe5b8bd4",
            "name": "userName",
            "email": "email@teste.com",
          }
        }
      }
  */
);

AuthenticationRouter.post(
  '/logout',
  isAuth,
  authenticationController.logout,
  /*  #swagger.tags = ['Authentication']
      #swagger.summary = 'Realiza o logout de um usuário e adiciona seu token na blacklist'
      #swagger.responses[200] = {
        schema: {
          "message": "Logout sucessfully"
        }
      }
  */
);

export { AuthenticationRouter };
