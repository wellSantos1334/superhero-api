import { inject, injectable } from 'tsyringe';

import { ISuperpowerRepository } from '../../repositories/ISuperpowerRepository';

@injectable()
export class FindByIdsSuperpowerService {
  constructor(
    @inject('SuperpowerRepository')
    private readonly superpowerRepository: ISuperpowerRepository,
  ) {}

  async execute(ids: number[]) {
    return await this.superpowerRepository.findByIds(ids);
  }
}
