import { inject, injectable } from 'tsyringe';

import { ISuperpowerRepository } from '../../repositories/ISuperpowerRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdSuperpowerService {
  constructor(
    @inject('SuperpowerRepository')
    private readonly superpowerRepository: ISuperpowerRepository,
  ) {}

  async execute(id: number) {
    const superpower = await this.superpowerRepository.findById(id);

    if (!superpower) {
      throw new NotFound('NotFound any Superpower with this id!');
    }

    return superpower;
  }
}
