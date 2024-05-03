import { Request, Response } from 'express';

import { CreatePublisherDTO } from '../../../dtos/publisher/CreatePublisherDTO';
import { CreatePublisherService } from '../../../services/publisher/CreatePublisherService';
import { FindByIdPublisherService } from '../../../services/publisher/FindByIdPublisherService';
import { GetAllPublisherService } from '../../../services/publisher/GetAllPublisherService';
import { UpdatePublisherDTO } from '../../../dtos/publisher/UpdatePublisherDTO';
import { UpdatePublisherService } from '../../../services/publisher/UpdatePublisherService';
import { DeletePublisherService } from '../../../services/publisher/DeletePublisherService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class PublisherController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreatePublisherDTO(request.body);

    const createPublisherService = container.resolve(CreatePublisherService);

    const createdPublisher = await createPublisherService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdPublisher);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdPublisherService = container.resolve(
      FindByIdPublisherService,
    );

    const publisher = await findByIdPublisherService.execute(Number(id));

    return response.status(200).json(publisher);
  }

  async getAll(request: Request, response: Response) {
    const getAllPublisherService = container.resolve(GetAllPublisherService);

    const publishers = await getAllPublisherService.execute();

    return response.status(200).json(publishers);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdatePublisherDTO({
      id: Number(id),
      ...request.body,
    });

    const updatePublisherService = container.resolve(UpdatePublisherService);

    await updatePublisherService.execute(requestValidated.getAll());

    return response.status(200).json('Publisher updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deletePublisherService = container.resolve(DeletePublisherService);

    await deletePublisherService.execute(Number(id));

    return response.status(200).json('Publisher deleted successfully');
  }
}
