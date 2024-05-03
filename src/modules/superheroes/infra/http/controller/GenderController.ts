import { Request, Response } from 'express';

import { CreateGenderDTO } from '../../../dtos/gender/CreateGenderDTO';
import { CreateGenderService } from '../../../services/gender/CreateGenderService';
import { FindByIdGenderService } from '../../../services/gender/FindByIdGenderService';
import { GetAllGenderService } from '../../../services/gender/GetAllGenderService';
import { UpdateGenderDTO } from '../../../dtos/gender/UpdateGenderDTO';
import { UpdateGenderService } from '../../../services/gender/UpdateGenderService';
import { DeleteGenderService } from '../../../services/gender/DeleteGenderService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class GenderController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateGenderDTO(request.body);

    const createGenderService = container.resolve(CreateGenderService);

    const createdGender = await createGenderService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdGender);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdGenderService = container.resolve(FindByIdGenderService);

    const gender = await findByIdGenderService.execute(Number(id));

    return response.status(200).json(gender);
  }

  async getAll(request: Request, response: Response) {
    const getAllGenderService = container.resolve(GetAllGenderService);

    const genders = await getAllGenderService.execute();

    return response.status(200).json(genders);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateGenderDTO({
      id: Number(id),
      ...request.body,
    });

    const updateGenderService = container.resolve(UpdateGenderService);

    await updateGenderService.execute(requestValidated.getAll());

    return response.status(200).json('Gender updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteGenderService = container.resolve(DeleteGenderService);

    await deleteGenderService.execute(Number(id));

    return response.status(200).json('Gender deleted successfully');
  }
}
