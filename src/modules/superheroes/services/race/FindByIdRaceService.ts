import { inject, injectable } from 'tsyringe';

import { IRaceRepository } from '../../repositories/IRaceRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdRaceService {
  constructor(
    @inject('RaceRepository')
    private readonly raceRepository: IRaceRepository,
  ) {}

  async execute(id: number) {
    const race = await this.raceRepository.findById(id);

    if (!race) {
      throw new NotFound('NotFound any Race with this id!');
    }

    return race;
  }
}
