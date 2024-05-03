import { inject, injectable } from 'tsyringe';

import { IPublisherRepository } from '../../repositories/IPublisherRepository';

import { FindByIdPublisherService } from './FindByIdPublisherService';

@injectable()
export class DeletePublisherService {
  constructor(
    @inject('PublisherRepository')
    private readonly publisherRepository: IPublisherRepository,
    private readonly findByIdPublisherService: FindByIdPublisherService,
  ) {}

  async execute(id: number) {
    const alignment = await this.findByIdPublisherService.execute(id);

    return await this.publisherRepository.delete(alignment.id);
  }
}
