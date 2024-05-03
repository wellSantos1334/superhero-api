import { inject, injectable } from 'tsyringe';

import { IRaceRepository } from '../../repositories/IRaceRepository';

import { FindByIdRaceService } from './FindByIdRaceService';

@injectable()
export class DeleteRaceService {
  constructor(
    @inject('RaceRepository')
    private readonly alignmentRepository: IRaceRepository,
    private readonly findByIdRaceService: FindByIdRaceService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdRaceService.execute(id);

    return await this.alignmentRepository.delete(alignment.id);
  }
}
