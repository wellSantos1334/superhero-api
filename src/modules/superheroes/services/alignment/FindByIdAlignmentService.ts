import { inject, injectable } from 'tsyringe';

import { IAlignmentRepository } from '../../repositories/IAlignmentRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdAlignmentService {
  constructor(
    @inject('AlignmentRepository')
    private readonly alignmentRepository: IAlignmentRepository,
  ) {}

  async execute(id: number) {
    const alignment = await this.alignmentRepository.findById(id);

    if (!alignment) {
      throw new NotFound('NotFound any Alignment with this id!');
    }

    return alignment;
  }
}
