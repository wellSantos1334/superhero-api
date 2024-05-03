import { inject, injectable } from 'tsyringe';

import { IPublisherRepository } from '../../repositories/IPublisherRepository';
import { UpdatePublisher } from '../../dtos/publisher/UpdatePublisherDTO';

import { FindByIdPublisherService } from './FindByIdPublisherService';

@injectable()
export class UpdatePublisherService {
  constructor(
    @inject('PublisherRepository')
    private readonly publisherRepository: IPublisherRepository,
    private readonly findByIdPublisherService: FindByIdPublisherService,
  ) {}

  async execute(data: UpdatePublisher) {
    await this.findByIdPublisherService.execute(data.id);

    return await this.publisherRepository.update(data);
  }
}
