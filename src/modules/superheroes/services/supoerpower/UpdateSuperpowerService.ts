import { inject, injectable } from 'tsyringe';

import { ISuperpowerRepository } from '../../repositories/ISuperpowerRepository';
import { UpdateSuperpower } from '../../dtos/superpower/UpdateSuperpowerDTO';

import { FindByIdSuperpowerService } from './FindByIdSuperpowerService';

@injectable()
export class UpdateSuperpowerService {
  constructor(
    @inject('SuperpowerRepository')
    private readonly superpowerRepository: ISuperpowerRepository,
    private readonly findByIdSuperpowerService: FindByIdSuperpowerService,
  ) {}

  async execute(data: UpdateSuperpower) {
    await this.findByIdSuperpowerService.execute(data.id);

    return await this.superpowerRepository.update(data);
  }
}
