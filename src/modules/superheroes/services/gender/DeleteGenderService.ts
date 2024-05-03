import { inject, injectable } from 'tsyringe';

import { IGenderRepository } from '../../repositories/IGenderRepository';

import { FindByIdGenderService } from './FindByIdGenderService';

@injectable()
export class DeleteGenderService {
  constructor(
    @inject('GenderRepository')
    private readonly alignmentRepository: IGenderRepository,
    private readonly findByIdGenderService: FindByIdGenderService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdGenderService.execute(id);

    return await this.alignmentRepository.delete(alignment.id);
  }
}
