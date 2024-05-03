import { Request, Response } from 'express';

import { CreateAttributeDTO } from '../../../dtos/attribute/CreateAttributeDTO';
import { CreateAttributeService } from '../../../services/attribute/CreateAttributeService';
import { FindByIdAttributeService } from '../../../services/attribute/FindByIdAttributeService';
import { GetAllAttributeService } from '../../../services/attribute/GetAllAttributeService';
import { UpdateAttributeDTO } from '../../../dtos/attribute/UpdateAttributeDTO';
import { UpdateAttributeService } from '../../../services/attribute/UpdateAttributeService';
import { DeleteAttributeService } from '../../../services/attribute/DeleteAttributeService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class AttributeController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateAttributeDTO(request.body);

    const createAttributeService = container.resolve(CreateAttributeService);

    const createdAttribute = await createAttributeService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdAttribute);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdAttributeService = container.resolve(
      FindByIdAttributeService,
    );

    const attribute = await findByIdAttributeService.execute(Number(id));

    return response.status(200).json(attribute);
  }

  async getAll(request: Request, response: Response) {
    const getAllAttributeService = container.resolve(GetAllAttributeService);

    const attributes = await getAllAttributeService.execute();

    return response.status(200).json(attributes);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateAttributeDTO({
      id: Number(id),
      ...request.body,
    });

    const updateAttributeService = container.resolve(UpdateAttributeService);

    await updateAttributeService.execute(requestValidated.getAll());

    return response.status(200).json('Attribute updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteAttributeService = container.resolve(DeleteAttributeService);

    await deleteAttributeService.execute(Number(id));

    return response.status(200).json('Attribute deleted successfully');
  }
}
