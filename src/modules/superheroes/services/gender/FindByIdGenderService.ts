import { inject, injectable } from 'tsyringe';

import { IGenderRepository } from '../../repositories/IGenderRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdGenderService {
  constructor(
    @inject('GenderRepository')
    private readonly genderRepository: IGenderRepository,
  ) {}

  async execute(id: number) {
    const gender = await this.genderRepository.findById(id);

    if (!gender) {
      throw new NotFound('NotFound any Gender with this id!');
    }

    return gender;
  }
}
