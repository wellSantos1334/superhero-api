import { injectable } from 'tsyringe';

import { Superpower } from '../entities/Superpower';
import type { ISuperpowerRepository } from '../../../repositories/ISuperpowerRepository';
import { CreateSuperpower } from '../../../dtos/superpower/CreateSuperpowerDTO';
import { UpdateSuperpower } from '../../../dtos/superpower/UpdateSuperpowerDTO';

import { AppDataSource } from '@/shared/infra/typeorm';
import { AbstractTransactionRepository } from '@/shared/container/providers/transaction-manager/AbstractTransactionRepository';
import { TransactionManager } from '@/shared/container/providers/transaction-manager/TransactionManager';

@injectable()
export class SuperpowerRepository
  extends AbstractTransactionRepository<Superpower>
  implements ISuperpowerRepository
{
  constructor(protected transaction: TransactionManager) {
    super(transaction, Superpower);
  }

  private readonly superpowerRepository =
    AppDataSource.getRepository(Superpower);

  async create(data: CreateSuperpower) {
    const superpower = this.superpowerRepository.create(data);
    return await this.superpowerRepository.save(superpower);
  }

  async findById(id: number) {
    return await this.superpowerRepository.findOneBy({ id });
  }

  async getAll() {
    return await this.superpowerRepository.find();
  }

  async update(data: UpdateSuperpower) {
    await this.superpowerRepository.update({ id: data.id }, data);
  }

  async delete(id: number) {
    await this.superpowerRepository.delete(id);
  }
}
