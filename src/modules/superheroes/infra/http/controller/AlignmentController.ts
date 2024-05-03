import { Request, Response } from 'express';

import { CreateAlignmentDTO } from '../../../dtos/alignment/CreateAlignmentDTO';
import { CreateAlignmentService } from '../../../services/alignment/CreateAlignmentService';
import { FindByIdAlignmentService } from '../../../services/alignment/FindByIdAlignmentService';
import { GetAllAlignmentService } from '../../../services/alignment/GetAllAlignmentService';
import { UpdateAlignmentDTO } from '../../../dtos/alignment/UpdateAlignmentDTO';
import { UpdateAlignmentService } from '../../../services/alignment/UpdateAlignmentService';
import { DeleteAlignmentService } from '../../../services/alignment/DeleteAlignmentService';

import { container } from '@/shared/container/providers/transaction-manager/ContainerResolveTransaction';

export class AlignmentController {
  async create(request: Request, response: Response) {
    const requestValidated = new CreateAlignmentDTO(request.body);

    const createAlignmentService = container.resolve(CreateAlignmentService);

    const createdAlignment = await createAlignmentService.execute(
      requestValidated.getAll(),
    );

    return response.status(201).json(createdAlignment);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdAlignmentService = container.resolve(
      FindByIdAlignmentService,
    );

    const alignment = await findByIdAlignmentService.execute(Number(id));

    return response.status(200).json(alignment);
  }

  async getAll(request: Request, response: Response) {
    const getAllAlignmentService = container.resolve(GetAllAlignmentService);

    const alignments = await getAllAlignmentService.execute();

    return response.status(200).json(alignments);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const requestValidated = new UpdateAlignmentDTO({
      id: Number(id),
      ...request.body,
    });

    const updateAlignmentService = container.resolve(UpdateAlignmentService);

    await updateAlignmentService.execute(requestValidated.getAll());

    return response.status(200).json('Alignment updated successfully');
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteAlignmentService = container.resolve(DeleteAlignmentService);

    await deleteAlignmentService.execute(Number(id));

    return response.status(200).json('Alignment deleted successfully');
  }
}
