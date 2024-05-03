import { inject, injectable } from 'tsyringe';

import { IPublisherRepository } from '../../repositories/IPublisherRepository';

@injectable()
export class GetAllPublisherService {
  constructor(
    @inject('PublisherRepository')
    private readonly publisherRepository: IPublisherRepository,
  ) {}

  async execute() {
    return await this.publisherRepository.getAll();
  }
}
