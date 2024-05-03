import { inject, injectable } from 'tsyringe';

import { IAlignmentRepository } from '../../repositories/IAlignmentRepository';
import { UpdateAlignment } from '../../dtos/alignment/UpdateAlignmentDTO';

import { FindByIdAlignmentService } from './FindByIdAlignmentService';

@injectable()
export class UpdateAlignmentService {
  constructor(
    @inject('AlignmentRepository')
    private readonly alignmentRepository: IAlignmentRepository,
    private readonly findByIdAlignmentService: FindByIdAlignmentService,
  ) {}

  async execute(data: UpdateAlignment) {
    await this.findByIdAlignmentService.execute(data.id);

    return await this.alignmentRepository.update(data);
  }
}
