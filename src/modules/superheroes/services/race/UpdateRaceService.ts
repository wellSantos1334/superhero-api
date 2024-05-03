import { inject, injectable } from 'tsyringe';

import { IRaceRepository } from '../../repositories/IRaceRepository';
import { UpdateRace } from '../../dtos/race/UpdateRaceDTO';

import { FindByIdRaceService } from './FindByIdRaceService';

@injectable()
export class UpdateRaceService {
  constructor(
    @inject('RaceRepository')
    private readonly raceRepository: IRaceRepository,
    private readonly findByIdRaceService: FindByIdRaceService,
  ) {}

  async execute(data: UpdateRace) {
    await this.findByIdRaceService.execute(data.id);

    return await this.raceRepository.update(data);
  }
}
