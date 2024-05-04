import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { UpdateUser } from '../dtos/UpdateUserDTO';
import { addAudit } from '../../../shared/infra/mongo/addAudit';
import { addLog } from '../../../shared/infra/mongo/addLog';

import { FindByIdUserService } from './FindByIdUserService';

import Conflict from '@/shared/errors/conflict';

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    private readonly findByIdUserService: FindByIdUserService,
  ) {}

  async execute(
    data: UpdateUser,
    profilePhoto: Express.Multer.File | undefined,
    userId: string,
  ) {
    const user = await this.findByIdUserService.execute(data.id);

    const checkEmailExists = await this.userRepository.findByEmailAndNotId(
      data.email,
      user.id,
    );

    if (checkEmailExists) {
      await addLog({
        log: 'Conflict',
        message: 'Email already exist',
      });
      throw new Conflict('Email already exist');
    }

    const cpfAlreadyExists = await this.userRepository.findByCpf(data.cpf);

    if (cpfAlreadyExists) {
      await addLog({
        log: 'Conflict',
        message: 'CPF already exists',
      });
      throw new Conflict('CPF already exists');
    }

    await this.userRepository.update({
      id: user.id,
      name: data.name,
      password: data.password,
      cpf: data.cpf,
      email: data.email,
      biography: data.biography,
      profilePhoto: profilePhoto?.filename ?? '',
    });

    await addAudit({
      userId,
      module: 'User',
      feature: 'Update',
      oldData: { user },
      newData: { data },
    });
  }
}
