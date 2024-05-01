import { Request, Response } from 'express';

import { CreateUserService } from '../../../services/CreateUserService';
import { CreateUserDTO } from '../../../dtos/CreateUserDTO';
import { FindByIdUserService } from '../../../services/FindByIdUserService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class UsersController {
  async createUser(request: Request, response: Response) {
    const requestValidated = new CreateUserDTO(request.body);
    const profilePhoto = request.file;

    const addUserService = container.resolve(CreateUserService);

    const createdUser = await addUserService.execute(
      requestValidated.getAll(),
      profilePhoto,
    );

    return response.status(201).json(createdUser);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdUserService = container.resolve(FindByIdUserService);

    const user = await findByIdUserService.execute(id);

    return response.status(200).json(user);
  }
}
