import { Request, Response } from 'express';

import { CreateRaceDTO } from '../../../dtos/race/CreateRaceDTO';
import { CreateRaceService } from '../../../services/race/CreateRaceService';
import { FindByIdRaceService } from '../../../services/race/FindByIdRaceService';
import { GetAllRaceService } from '../../../services/race/GetAllRaceService';
import { UpdateRaceDTO } from '../../../dtos/race/UpdateRaceDTO';
import { UpdateRaceService } from '../../../services/race/UpdateRaceService';
import { DeleteRaceService } from '../../../services/race/DeleteRaceService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class RaceController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateRaceDTO(request.body);

    const createRaceService = container.resolve(CreateRaceService);

    const createdRace = await createRaceService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdRace);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdRaceService = container.resolve(FindByIdRaceService);

    const race = await findByIdRaceService.execute(Number(id));

    return response.status(200).json(race);
  }

  async getAll(request: Request, response: Response) {
    const getAllRaceService = container.resolve(GetAllRaceService);

    const races = await getAllRaceService.execute();

    return response.status(200).json(races);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateRaceDTO({
      id: Number(id),
      ...request.body,
    });

    const updateRaceService = container.resolve(UpdateRaceService);

    await updateRaceService.execute(requestValidated.getAll());

    return response.status(200).json('Race updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteRaceService = container.resolve(DeleteRaceService);

    await deleteRaceService.execute(Number(id));

    return response.status(200).json('Race deleted successfully');
  }
}
