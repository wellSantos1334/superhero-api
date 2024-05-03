import { inject, injectable } from 'tsyringe';

import { IAlignmentRepository } from '../../repositories/IAlignmentRepository';

import { FindByIdAlignmentService } from './FindByIdAlignmentService';

@injectable()
export class DeleteAlignmentService {
  constructor(
    @inject('AlignmentRepository')
    private readonly alignmentRepository: IAlignmentRepository,
    private readonly findByIdAlignmentService: FindByIdAlignmentService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdAlignmentService.execute(id);

    return await this.alignmentRepository.delete(alignment.id);
  }
}
