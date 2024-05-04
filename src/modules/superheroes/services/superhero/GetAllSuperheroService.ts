import { inject, injectable } from 'tsyringe';

import { ISuperheroRepository } from '../../repositories/ISuperheroRepository';
import { GetOrderSuperhero } from '../../dtos/superhero/GetOrderSuperheroDTO';
import { GetFilterSuperhero } from '../../dtos/superhero/GetFilterSuperheroDTO';

@injectable()
export class GetAllSuperheroService {
  constructor(
    @inject('SuperheroRepository')
    private readonly superheroRepository: ISuperheroRepository,
  ) {}

  async execute(
    page: number,
    size: number,
    order: GetOrderSuperhero,
    filter: GetFilterSuperhero,
  ) {
    return await this.superheroRepository.getAll(page, size, order, filter);
  }
}
