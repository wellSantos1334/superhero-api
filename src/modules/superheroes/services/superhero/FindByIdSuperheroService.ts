import { inject, injectable } from 'tsyringe';

import { ISuperheroRepository } from '../../repositories/ISuperheroRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdSuperheroService {
  constructor(
    @inject('SuperheroRepository')
    private readonly superheroRepository: ISuperheroRepository,
  ) {}

  async execute(id: number) {
    const superhero = await this.superheroRepository.findById(id);

    if (!superhero) {
      throw new NotFound('NotFound any Superhero with this id!');
    }

    return superhero;
  }
}
