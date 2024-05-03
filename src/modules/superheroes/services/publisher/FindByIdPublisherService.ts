import { inject, injectable } from 'tsyringe';

import { IPublisherRepository } from '../../repositories/IPublisherRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdPublisherService {
  constructor(
    @inject('PublisherRepository')
    private readonly publisherRepository: IPublisherRepository,
  ) {}

  async execute(id: number) {
    const publisher = await this.publisherRepository.findById(id);

    if (!publisher) {
      throw new NotFound('NotFound any Publisher with this id!');
    }

    return publisher;
  }
}
