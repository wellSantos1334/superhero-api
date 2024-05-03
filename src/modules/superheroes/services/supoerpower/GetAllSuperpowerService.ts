import { inject, injectable } from 'tsyringe';

import { ISuperpowerRepository } from '../../repositories/ISuperpowerRepository';

@injectable()
export class GetAllSuperpowerService {
  constructor(
    @inject('SuperpowerRepository')
    private readonly superpowerRepository: ISuperpowerRepository,
  ) {}

  async execute() {
    return await this.superpowerRepository.getAll();
  }
}
