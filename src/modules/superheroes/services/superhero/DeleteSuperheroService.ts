import { inject, injectable } from 'tsyringe';

import { ISuperheroRepository } from '../../repositories/ISuperheroRepository';

import { FindByIdSuperheroService } from './FindByIdSuperheroService';

@injectable()
export class DeleteSuperheroService {
  constructor(
    @inject('SuperheroRepository')
    private readonly superheroRepository: ISuperheroRepository,
    private readonly findByIdSuperheroService: FindByIdSuperheroService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdSuperheroService.execute(id);

    return await this.superheroRepository.delete(alignment.id);
  }
}
