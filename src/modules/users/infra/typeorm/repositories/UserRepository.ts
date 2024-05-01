import { injectable } from 'tsyringe';
import { Not } from 'typeorm';

import { User } from '../entities/User';
import type {
  IUserRepository,
  UserSaveInput,
  UserUpdateInput,
  UserUpdatePasswordInput,
} from '../../../repositories/IUserRepository';

import { AppDataSource } from '@/shared/infra/typeorm';
import { hashPassword } from '@/shared/util/Password';
import { AbstractTransactionRepository } from '@/shared/container/providers/transaction-manager/AbstractTransactionRepository';
import { TransactionManager } from '@/shared/container/providers/transaction-manager/TransactionManager';

@injectable()
export class UserRepository
  extends AbstractTransactionRepository<User>
  implements IUserRepository
{
  constructor(protected transaction: TransactionManager) {
    super(transaction, User);
  }

  private readonly userRepository = AppDataSource.getRepository(User);

  async create(data: UserSaveInput) {
    const user = this.userRepository.create({
      ...data,
      password: hashPassword(data.password),
    });
    return await this.userRepository.save(user);
  }

  async findById(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findByEmailAndNotId(email: string, id: string) {
    return await this.userRepository.findOne({ where: { email, id: Not(id) } });
  }

  async findByCpf(cpf: string) {
    return await this.userRepository.findOne({ where: { cpf } });
  }

  async getAll() {
    return await this.userRepository.find();
  }

  async updatePassword({ id, password }: UserUpdatePasswordInput) {
    await this.userRepository.update(
      { id },
      {
        password: hashPassword(password),
      },
    );
  }

  async update(data: UserUpdateInput) {
    await this.userRepository.update(
      { id: data.id },
      { ...data, password: hashPassword(data.password) },
    );
  }

  async userLoginByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'cpf', 'name', 'password'],
    });
  }

  async userLoginByCpf(cpf: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: { cpf },
      select: ['id', 'email', 'cpf', 'name', 'password'],
    });
  }

  async delete(id: string) {
    await this.userRepository.delete(id);
  }
}
