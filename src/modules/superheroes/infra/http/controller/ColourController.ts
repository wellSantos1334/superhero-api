import { Request, Response } from 'express';

import { CreateColourDTO } from '../../../dtos/colour/CreateColourDTO';
import { CreateColourService } from '../../../services/colour/CreateColourService';
import { FindByIdColourService } from '../../../services/colour/FindByIdColourService';
import { GetAllColourService } from '../../../services/colour/GetAllColourService';
import { UpdateColourDTO } from '../../../dtos/colour/UpdateColourDTO';
import { UpdateColourService } from '../../../services/colour/UpdateColourService';
import { DeleteColourService } from '../../../services/colour/DeleteColourService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class ColourController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateColourDTO(request.body);

    const createColourService = container.resolve(CreateColourService);

    const createdColour = await createColourService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdColour);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdColourService = container.resolve(FindByIdColourService);

    const colour = await findByIdColourService.execute(Number(id));

    return response.status(200).json(colour);
  }

  async getAll(request: Request, response: Response) {
    const getAllColourService = container.resolve(GetAllColourService);

    const colours = await getAllColourService.execute();

    return response.status(200).json(colours);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateColourDTO({
      id: Number(id),
      ...request.body,
    });

    const updateColourService = container.resolve(UpdateColourService);

    await updateColourService.execute(requestValidated.getAll());

    return response.status(200).json('Colour updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteColourService = container.resolve(DeleteColourService);

    await deleteColourService.execute(Number(id));

    return response.status(200).json('Colour deleted successfully');
  }
}
