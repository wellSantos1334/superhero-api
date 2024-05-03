import { inject, injectable } from 'tsyringe';

import { IColourRepository } from '../../repositories/IColourRepository';
import { CreateColour } from '../../dtos/colour/CreateColourDTO';

@injectable()
export class CreateColourService {
  constructor(
    @inject('ColourRepository')
    private readonly colourRepository: IColourRepository,
  ) {}

  async execute(data: CreateColour) {
    return await this.colourRepository.create(data);
  }
}
