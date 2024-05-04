import { inject, injectable } from 'tsyringe';

import { IHeroAttributeRepository } from '../../repositories/IHeroAttributeRepository';
import { CreateHeroAttribute } from '../../dtos/heroAttribute/CreateHeroAttributeDTO';
import { FindByIdSuperheroService } from '../superhero/FindByIdSuperheroService';
import { FindByIdAttributeService } from '../attribute/FindByIdAttributeService';

@injectable()
export class CreateHeroAttributeService {
  constructor(
    @inject('HeroAttributeRepository')
    private readonly heroAttributeRepository: IHeroAttributeRepository,
    private readonly findByIdSuperheroService: FindByIdSuperheroService,
    private readonly findByIdAttributeService: FindByIdAttributeService,
  ) {}

  async execute(data: CreateHeroAttribute) {
    const superhero = await this.findByIdSuperheroService.execute(
      data.superhero,
    );

    const attribute = await this.findByIdAttributeService.execute(
      data.attribute,
    );

    return await this.heroAttributeRepository.create({
      attributeValue: data.attributeValue,
      superhero,
      attribute,
    });
  }
}
