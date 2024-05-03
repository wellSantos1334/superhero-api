import { inject, injectable } from 'tsyringe';

import { IColourRepository } from '../../repositories/IColourRepository';

import { FindByIdColourService } from './FindByIdColourService';

@injectable()
export class DeleteColourService {
  constructor(
    @inject('ColourRepository')
    private readonly alignmentRepository: IColourRepository,
    private readonly findByIdColourService: FindByIdColourService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdColourService.execute(id);

    return await this.alignmentRepository.delete(alignment.id);
  }
}
