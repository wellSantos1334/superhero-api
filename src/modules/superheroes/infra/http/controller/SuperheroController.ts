import { Request, Response } from 'express';

import { CreateSuperheroDTO } from '../../../dtos/superhero/CreateSuperheroDTO';
import { CreateSuperheroService } from '../../../services/superhero/CreateSuperheroService';
import { FindByIdSuperheroService } from '../../../services/superhero/FindByIdSuperheroService';
import { GetAllSuperheroService } from '../../../services/superhero/GetAllSuperheroService';
import { UpdateSuperheroDTO } from '../../../dtos/superhero/UpdateSuperheroDTO';
import { UpdateSuperheroService } from '../../../services/superhero/UpdateSuperheroService';
import { DeleteSuperheroService } from '../../../services/superhero/DeleteSuperheroService';
import { IPageRequest } from '../../../../../shared/dtos/IPageRequest';
import { GetOrderSuperheroDTO } from '../../../dtos/superhero/GetOrderSuperheroDTO';
import { GetFilterSuperheroDTO } from '../../../dtos/superhero/GetFilterSuperheroDTO';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class SuperheroController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateSuperheroDTO(request.body);

    const createSuperheroService = container.resolve(CreateSuperheroService);

    const createdSuperhero = await createSuperheroService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdSuperhero);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdSuperheroService = container.resolve(
      FindByIdSuperheroService,
    );

    const superhero = await findByIdSuperheroService.execute(Number(id));

    return response.status(200).json(superhero);
  }

  async getAll(request: Request, response: Response) {
    const { page = 1, size = 30 }: IPageRequest = request.query;
    const order = new GetOrderSuperheroDTO(request.query);
    const filter = new GetFilterSuperheroDTO(request.query);

    const getAllSuperheroService = container.resolve(GetAllSuperheroService);

    const superheros = await getAllSuperheroService.execute(
      page,
      size,
      order.getAll(),
      filter.getAll(),
    );

    return response.status(200).json(superheros);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateSuperheroDTO({
      id: Number(id),
      ...request.body,
    });

    const updateSuperheroService = container.resolve(UpdateSuperheroService);

    await updateSuperheroService.execute(requestValidated.getAll());

    return response.status(200).json('Superhero updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteSuperheroService = container.resolve(DeleteSuperheroService);

    await deleteSuperheroService.execute(Number(id));

    return response.status(200).json('Superhero deleted successfully');
  }
}
