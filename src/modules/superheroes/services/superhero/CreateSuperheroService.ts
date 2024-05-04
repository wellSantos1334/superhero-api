import { inject, injectable } from 'tsyringe';

import { ISuperheroRepository } from '../../repositories/ISuperheroRepository';
import { CreateSuperhero } from '../../dtos/superhero/CreateSuperheroDTO';
import { FindByIdGenderService } from '../gender/FindByIdGenderService';
import { FindByIdColourService } from '../colour/FindByIdColourService';
import { FindByIdRaceService } from '../race/FindByIdRaceService';
import { FindByIdPublisherService } from '../publisher/FindByIdPublisherService';
import { FindByIdAlignmentService } from '../alignment/FindByIdAlignmentService';
import { FindByIdsSuperpowerService } from '../superpower/FindByIdsSuperpowerService';
import BadRequest from '../../../../shared/errors/badRequest';

@injectable()
export class CreateSuperheroService {
  constructor(
    @inject('SuperheroRepository')
    private readonly superheroRepository: ISuperheroRepository,
    private readonly findByIdGenderService: FindByIdGenderService,
    private readonly findByIdColourService: FindByIdColourService,
    private readonly findByIdRaceService: FindByIdRaceService,
    private readonly findByIdPublisherService: FindByIdPublisherService,
    private readonly findByIdAlignmentService: FindByIdAlignmentService,
    private readonly findByIdsSuperpowerService: FindByIdsSuperpowerService,
  ) {}

  async execute(data: CreateSuperhero) {
    const gender = await this.findByIdGenderService.execute(data.gender);
    const eyeColour = await this.findByIdColourService.execute(data.eyeColour);
    const hairColour = await this.findByIdColourService.execute(
      data.hairColour,
    );
    const skinColour = await this.findByIdColourService.execute(
      data.skinColour,
    );
    const race = await this.findByIdRaceService.execute(data.race);
    const publisher = await this.findByIdPublisherService.execute(
      data.publisher,
    );
    const alignment = await this.findByIdAlignmentService.execute(
      data.alignment,
    );

    const superpowerIds = data.superpowers.map(
      (superpower) => superpower.powerId,
    );

    const superpowers =
      await this.findByIdsSuperpowerService.execute(superpowerIds);

    if (superpowerIds.length !== superpowers.length) {
      throw new BadRequest('Some superpowers reported were NotFound');
    }

    return await this.superheroRepository.create({
      ...data,
      gender,
      eyeColour,
      hairColour,
      skinColour,
      race,
      publisher,
      alignment,
      superpowers,
    });
  }
}
