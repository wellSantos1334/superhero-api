import { inject, injectable } from 'tsyringe';

import { IHeroAttributeRepository } from '../../repositories/IHeroAttributeRepository';

import { FindByIdHeroAttributeService } from './FindByIdHeroAttributeService';

@injectable()
export class DeleteHeroAttributeService {
  constructor(
    @inject('HeroAttributeRepository')
    private readonly heroAttributeRepository: IHeroAttributeRepository,
    private readonly findByIdHeroAttributeService: FindByIdHeroAttributeService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdHeroAttributeService.execute(id);

    return await this.heroAttributeRepository.delete(alignment.id);
  }
}
