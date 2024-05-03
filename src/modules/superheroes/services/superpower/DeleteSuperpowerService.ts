import { inject, injectable } from 'tsyringe';

import { ISuperpowerRepository } from '../../repositories/ISuperpowerRepository';

import { FindByIdSuperpowerService } from './FindByIdSuperpowerService';

@injectable()
export class DeleteSuperpowerService {
  constructor(
    @inject('SuperpowerRepository')
    private readonly superpowerRepository: ISuperpowerRepository,
    private readonly findByIdSuperpowerService: FindByIdSuperpowerService,
  ) {}

  async execute(id: number) {
    const superpower = await this.findByIdSuperpowerService.execute(id);

    return await this.superpowerRepository.delete(superpower.id);
  }
}
