import { inject, injectable } from 'tsyringe';

import { IColourRepository } from '../../repositories/IColourRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdColourService {
  constructor(
    @inject('ColourRepository')
    private readonly colourRepository: IColourRepository,
  ) {}

  async execute(id: number) {
    const colour = await this.colourRepository.findById(id);

    if (!colour) {
      throw new NotFound('NotFound any Colour with this id!');
    }

    return colour;
  }
}
