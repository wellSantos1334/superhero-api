import { Request, Response } from 'express';

import { CreateUserService } from '../../../services/CreateUserService';
import { CreateUserDTO } from '../../../dtos/CreateUserDTO';
import { FindByIdUserService } from '../../../services/FindByIdUserService';
import { GetAllUserService } from '../../../services/GetAllUserService';
import { UpdateUserDTO } from '../../../dtos/UpdateUserDTO';
import { UpdateUserService } from '../../../services/UpdateUserService';
import { DeleteUserService } from '../../../services/DeleteUserService';
import { ActiveUserDTO } from '../../../dtos/ActiveUserDTO';
import { ActiveUserService } from '../../../services/ActiveUserService';

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

  async getAll(request: Request, response: Response) {
    const getAllUserService = container.resolve(GetAllUserService);

    const users = await getAllUserService.execute();

    return response.status(200).json(users);
  }

  async updateUser(request: Request, response: Response) {
    const requestValidated = new UpdateUserDTO({
      ...request.params,
      ...request.body,
    });

    const { userId } = response.locals;
    const profilePhoto = request.file;

    const updateUserService = container.resolve(UpdateUserService);

    await updateUserService.execute(
      requestValidated.getAll(),
      profilePhoto,
      userId,
    );

    return response.status(200).json('User updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const { userId } = response.locals;

    const deleteUserService = container.resolve(DeleteUserService);

    await deleteUserService.execute(id, userId);

    return response.status(200).json('User deleted successfully');
  }

  async activeUser(request: Request, response: Response) {
    const requestValidated = new ActiveUserDTO({
      ...request.params,
      ...request.body,
    });

    const { userId } = response.locals;

    const activeUserService = container.resolve(ActiveUserService);

    await activeUserService.execute(requestValidated.getAll(), userId);

    return response.status(200).json('Active status updated successfully');
  }
}
