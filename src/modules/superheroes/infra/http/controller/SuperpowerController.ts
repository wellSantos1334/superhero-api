import { Request, Response } from 'express';

import { CreateSuperpowerDTO } from '../../../dtos/superpower/CreateSuperpowerDTO';
import { CreateSuperpowerService } from '../../../services/superpower/CreateSuperpowerService';
import { FindByIdSuperpowerService } from '../../../services/superpower/FindByIdSuperpowerService';
import { GetAllSuperpowerService } from '../../../services/superpower/GetAllSuperpowerService';
import { UpdateSuperpowerDTO } from '../../../dtos/superpower/UpdateSuperpowerDTO';
import { UpdateSuperpowerService } from '../../../services/superpower/UpdateSuperpowerService';
import { DeleteSuperpowerService } from '../../../services/superpower/DeleteSuperpowerService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class SuperpowerController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateSuperpowerDTO(request.body);

    const createSuperpowerService = container.resolve(CreateSuperpowerService);

    const createdSuperpower = await createSuperpowerService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdSuperpower);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdSuperpowerService = container.resolve(
      FindByIdSuperpowerService,
    );

    const superpower = await findByIdSuperpowerService.execute(Number(id));

    return response.status(200).json(superpower);
  }

  async getAll(request: Request, response: Response) {
    const getAllSuperpowerService = container.resolve(GetAllSuperpowerService);

    const superpowers = await getAllSuperpowerService.execute();

    return response.status(200).json(superpowers);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateSuperpowerDTO({
      id: Number(id),
      ...request.body,
    });

    const updateSuperpowerService = container.resolve(UpdateSuperpowerService);

    await updateSuperpowerService.execute(requestValidated.getAll());

    return response.status(200).json('Superpower updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteSuperpowerService = container.resolve(DeleteSuperpowerService);

    await deleteSuperpowerService.execute(Number(id));

    return response.status(200).json('Superpower deleted successfully');
  }
}
