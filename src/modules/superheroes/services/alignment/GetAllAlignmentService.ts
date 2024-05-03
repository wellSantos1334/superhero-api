import { inject, injectable } from 'tsyringe';

import { IAlignmentRepository } from '../../repositories/IAlignmentRepository';

@injectable()
export class GetAllAlignmentService {
  constructor(
    @inject('AlignmentRepository')
    private readonly alignmentRepository: IAlignmentRepository,
  ) {}

  async execute() {
    return await this.alignmentRepository.getAll();
  }
}
