import { Request, Response } from 'express';

import { CreateHeroAttributeDTO } from '../../../dtos/heroAttribute/CreateHeroAttributeDTO';
import { CreateHeroAttributeService } from '../../../services/heroAttribute/CreateHeroAttributeService';
import { FindByIdHeroAttributeService } from '../../../services/heroAttribute/FindByIdHeroAttributeService';
import { GetAllHeroAttributeService } from '../../../services/heroAttribute/GetAllHeroAttributeService';
import { UpdateHeroAttributeDTO } from '../../../dtos/heroAttribute/UpdateHeroAttributeDTO';
import { UpdateHeroAttributeService } from '../../../services/heroAttribute/UpdateHeroAttributeService';
import { DeleteHeroAttributeService } from '../../../services/heroAttribute/DeleteHeroAttributeService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class HeroAttributeController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateHeroAttributeDTO(request.body);

    const createHeroAttributeService = container.resolve(
      CreateHeroAttributeService,
    );

    const createdHeroAttribute = await createHeroAttributeService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdHeroAttribute);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdHeroAttributeService = container.resolve(
      FindByIdHeroAttributeService,
    );

    const heroAttribute = await findByIdHeroAttributeService.execute(
      Number(id),
    );

    return response.status(200).json(heroAttribute);
  }

  async getAll(request: Request, response: Response) {
    const getAllHeroAttributeService = container.resolve(
      GetAllHeroAttributeService,
    );

    const heroAttributes = await getAllHeroAttributeService.execute();

    return response.status(200).json(heroAttributes);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateHeroAttributeDTO({
      id: Number(id),
      ...request.body,
    });

    const updateHeroAttributeService = container.resolve(
      UpdateHeroAttributeService,
    );

    await updateHeroAttributeService.execute(requestValidated.getAll());

    return response.status(200).json('HeroAttribute updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteHeroAttributeService = container.resolve(
      DeleteHeroAttributeService,
    );

    await deleteHeroAttributeService.execute(Number(id));

    return response.status(200).json('HeroAttribute deleted successfully');
  }
}
