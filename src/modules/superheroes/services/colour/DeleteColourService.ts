import { inject, injectable } from 'tsyringe';

import { IColourRepository } from '../../repositories/IColourRepository';

import { FindByIdColourService } from './FindByIdColourService';

@injectable()
export class DeleteColourService {
  constructor(
    @inject('ColourRepository')
    private readonly colourRepository: IColourRepository,
    private readonly findByIdColourService: FindByIdColourService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdColourService.execute(id);

    return await this.colourRepository.delete(alignment.id);
  }
}
