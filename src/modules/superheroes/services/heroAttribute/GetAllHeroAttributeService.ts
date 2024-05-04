import { inject, injectable } from 'tsyringe';

import { IHeroAttributeRepository } from '../../repositories/IHeroAttributeRepository';

@injectable()
export class GetAllHeroAttributeService {
  constructor(
    @inject('HeroAttributeRepository')
    private readonly heroAttributeRepository: IHeroAttributeRepository,
  ) {}

  async execute() {
    return await this.heroAttributeRepository.getAll();
  }
}
