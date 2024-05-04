import { injectable } from 'tsyringe';

import { Superhero } from '../entities/Superhero';
import type {
  SuperheroSaveInput,
  SuperheroUpdateInput,
  ISuperheroRepository,
} from '../../../repositories/ISuperheroRepository';

import { AppDataSource } from '@/shared/infra/typeorm';
import { AbstractTransactionRepository } from '@/shared/container/providers/transaction-manager/AbstractTransactionRepository';
import { TransactionManager } from '@/shared/container/providers/transaction-manager/TransactionManager';

@injectable()
export class SuperheroRepository
  extends AbstractTransactionRepository<Superhero>
  implements ISuperheroRepository
{
  constructor(protected transaction: TransactionManager) {
    super(transaction, Superhero);
  }

  private readonly superheroRepository = AppDataSource.getRepository(Superhero);

  async create(data: SuperheroSaveInput) {
    const superhero = this.superheroRepository.create(data);
    return await this.superheroRepository.save(superhero);
  }

  async findById(id: number) {
    return await this.superheroRepository.findOneBy({ id });
  }

  async getAll() {
    return await this.superheroRepository.find();
  }

  async update(data: SuperheroUpdateInput) {
    await this.superheroRepository.update({ id: data.id }, data);
  }

  async delete(id: number) {
    await this.superheroRepository.delete(id);
  }
}
