import { inject, injectable } from 'tsyringe';

import { IHeroAttributeRepository } from '../../repositories/IHeroAttributeRepository';
import { UpdateHeroAttribute } from '../../dtos/heroAttribute/UpdateHeroAttributeDTO';
import { FindByIdSuperheroService } from '../superhero/FindByIdSuperheroService';
import { FindByIdAttributeService } from '../attribute/FindByIdAttributeService';

import { FindByIdHeroAttributeService } from './FindByIdHeroAttributeService';

@injectable()
export class UpdateHeroAttributeService {
  constructor(
    @inject('HeroAttributeRepository')
    private readonly heroAttributeRepository: IHeroAttributeRepository,
    private readonly findByIdHeroAttributeService: FindByIdHeroAttributeService,
    private readonly findByIdSuperheroService: FindByIdSuperheroService,
    private readonly findByIdAttributeService: FindByIdAttributeService,
  ) {}

  async execute(data: UpdateHeroAttribute) {
    const heroAttribute = await this.findByIdHeroAttributeService.execute(
      data.id,
    );

    const superhero = await this.findByIdSuperheroService.execute(
      data.superhero,
    );

    const attribute = await this.findByIdAttributeService.execute(
      data.attribute,
    );

    return await this.heroAttributeRepository.update({
      id: heroAttribute.id,
      attributeValue: data.attributeValue,
      superhero,
      attribute,
    });
  }
}
