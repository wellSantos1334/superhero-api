import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { CreateUser } from '../dtos/CreateUserDTO';
import { omit } from '../../../shared/util/Omit';
import { addAudit } from '../../../shared/infra/mongo/addAudit';
import { addLog } from '../../../shared/infra/mongo/addLog';

import Conflict from '@/shared/errors/conflict';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(
    data: CreateUser,
    profilePhoto: Express.Multer.File | undefined,
  ) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      await addLog({
        log: 'Conflict',
        message: 'User already exists',
      });
      throw new Conflict('User already exists');
    }

    const cpfAlreadyExists = await this.userRepository.findByCpf(data.cpf);

    if (cpfAlreadyExists) {
      await addLog({
        log: 'Conflict',
        message: 'CPF already exists',
      });
      throw new Conflict('CPF already exists');
    }

    const createdUser = await this.userRepository.create({
      ...data,
      profilePhoto: profilePhoto?.filename ?? '',
      active: true,
    });

    await addAudit({
      module: 'User',
      feature: 'Create',
      oldData: {},
      newData: createdUser,
    });

    return omit(createdUser, ['password']);
  }
}
