import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { LoginService } from '../../../services/login';
import { LoginDTO } from '../../../dtos/LoginDTO';
import { LogoutService } from '../../../services/logout';

export class AuthenticationController {
  async login(request: Request, response: Response) {
    const { password, email, cpf } = new LoginDTO(request.body).getAll();

    const loginService = container.resolve(LoginService);

    const token = await loginService.execute({
      password,
      email,
      cpf,
    });

    return response.json(token);
  }

  async logout(request: Request, response: Response) {
    const authHeader = request.headers['authorization'];

    const logoutService = container.resolve(LogoutService);

    await logoutService.execute(authHeader);

    return response.json({ message: 'Logout sucessfully' });
  }
}
