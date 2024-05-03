import { inject, injectable } from 'tsyringe';

import { IGenderRepository } from '../../repositories/IGenderRepository';

@injectable()
export class GetAllGenderService {
  constructor(
    @inject('GenderRepository')
    private readonly alignmentRepository: IGenderRepository,
  ) {}

  async execute() {
    return await this.alignmentRepository.getAll();
  }
}
