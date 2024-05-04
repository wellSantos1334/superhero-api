import { inject, injectable } from 'tsyringe';

import { IHeroAttributeRepository } from '../../repositories/IHeroAttributeRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdHeroAttributeService {
  constructor(
    @inject('HeroAttributeRepository')
    private readonly heroAttributeRepository: IHeroAttributeRepository,
  ) {}

  async execute(id: number) {
    const heroAttribute = await this.heroAttributeRepository.findById(id);

    if (!heroAttribute) {
      throw new NotFound('NotFound any HeroAttribute with this id!');
    }

    return heroAttribute;
  }
}
