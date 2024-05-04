import { inject, injectable } from 'tsyringe';

import { ISuperheroRepository } from '../../repositories/ISuperheroRepository';

@injectable()
export class GetAllSuperheroService {
  constructor(
    @inject('SuperheroRepository')
    private readonly superheroRepository: ISuperheroRepository,
  ) {}

  async execute() {
    return await this.superheroRepository.getAll();
  }
}
