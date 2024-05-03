import { inject, injectable } from 'tsyringe';

import { IGenderRepository } from '../../repositories/IGenderRepository';

@injectable()
export class GetAllGenderService {
  constructor(
    @inject('GenderRepository')
    private readonly genderRepository: IGenderRepository,
  ) {}

  async execute() {
    return await this.genderRepository.getAll();
  }
}
