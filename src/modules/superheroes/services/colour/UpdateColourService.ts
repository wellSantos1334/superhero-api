import { inject, injectable } from 'tsyringe';

import { IColourRepository } from '../../repositories/IColourRepository';
import { UpdateColour } from '../../dtos/colour/UpdateColourDTO';

import { FindByIdColourService } from './FindByIdColourService';

@injectable()
export class UpdateColourService {
  constructor(
    @inject('ColourRepository')
    private readonly colourRepository: IColourRepository,
    private readonly findByIdColourService: FindByIdColourService,
  ) {}

  async execute(data: UpdateColour) {
    await this.findByIdColourService.execute(data.id);

    return await this.colourRepository.update(data);
  }
}
