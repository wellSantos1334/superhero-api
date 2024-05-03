import { inject, injectable } from 'tsyringe';

import { IGenderRepository } from '../../repositories/IGenderRepository';
import { UpdateGender } from '../../dtos/gender/UpdateGenderDTO';

import { FindByIdGenderService } from './FindByIdGenderService';

@injectable()
export class UpdateGenderService {
  constructor(
    @inject('GenderRepository')
    private readonly genderRepository: IGenderRepository,
    private readonly findByIdGenderService: FindByIdGenderService,
  ) {}

  async execute(data: UpdateGender) {
    await this.findByIdGenderService.execute(data.id);

    return await this.genderRepository.update(data);
  }
}
