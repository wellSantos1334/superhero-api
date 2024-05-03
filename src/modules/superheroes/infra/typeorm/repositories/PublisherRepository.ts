import { injectable } from 'tsyringe';

import { Publisher } from '../entities/Publisher';
import type { IPublisherRepository } from '../../../repositories/IPublisherRepository';
import { CreatePublisher } from '../../../dtos/publisher/CreatePublisherDTO';
import { UpdatePublisher } from '../../../dtos/publisher/UpdatePublisherDTO';

import { AppDataSource } from '@/shared/infra/typeorm';
import { AbstractTransactionRepository } from '@/shared/container/providers/transaction-manager/AbstractTransactionRepository';
import { TransactionManager } from '@/shared/container/providers/transaction-manager/TransactionManager';

@injectable()
export class PublisherRepository
  extends AbstractTransactionRepository<Publisher>
  implements IPublisherRepository
{
  constructor(protected transaction: TransactionManager) {
    super(transaction, Publisher);
  }

  private readonly publisherRepository = AppDataSource.getRepository(Publisher);

  async create(data: CreatePublisher) {
    const publisher = this.publisherRepository.create(data);
    return await this.publisherRepository.save(publisher);
  }

  async findById(id: number) {
    return await this.publisherRepository.findOneBy({ id });
  }

  async getAll() {
    return await this.publisherRepository.find();
  }

  async update(data: UpdatePublisher) {
    await this.publisherRepository.update({ id: data.id }, data);
  }

  async delete(id: number) {
    await this.publisherRepository.delete(id);
  }
}
