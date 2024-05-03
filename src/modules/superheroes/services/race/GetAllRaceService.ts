import { inject, injectable } from 'tsyringe';

import { IRaceRepository } from '../../repositories/IRaceRepository';

@injectable()
export class GetAllRaceService {
  constructor(
    @inject('RaceRepository')
    private readonly alignmentRepository: IRaceRepository,
  ) {}

  async execute() {
    return await this.alignmentRepository.getAll();
  }
}
