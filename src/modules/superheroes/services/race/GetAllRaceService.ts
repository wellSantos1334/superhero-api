import { inject, injectable } from 'tsyringe';

import { IRaceRepository } from '../../repositories/IRaceRepository';

@injectable()
export class GetAllRaceService {
  constructor(
    @inject('RaceRepository')
    private readonly raceRepository: IRaceRepository,
  ) {}

  async execute() {
    return await this.raceRepository.getAll();
  }
}
