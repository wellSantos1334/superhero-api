import { inject, injectable } from 'tsyringe';

import { ISuperpowerRepository } from '../../repositories/ISuperpowerRepository';
import { CreateSuperpower } from '../../dtos/superpower/CreateSuperpowerDTO';

@injectable()
export class CreateSuperpowerService {
  constructor(
    @inject('SuperpowerRepository')
    private readonly superpowerRepository: ISuperpowerRepository,
  ) {}

  async execute(data: CreateSuperpower) {
    return await this.superpowerRepository.create(data);
  }
}
