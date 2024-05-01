import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { UpdateUser } from '../dtos/UpdateUserDTO';

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
  ) {
    const user = await this.findByIdUserService.execute(data.id);

    const checkEmailExists = await this.userRepository.findByEmailAndNotId(
      data.email,
      user.id,
    );

    if (checkEmailExists) {
      throw new Conflict('Email already exist');
    }

    const cpfAlreadyExists = await this.userRepository.findByCpf(data.cpf);

    if (cpfAlreadyExists) {
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
  }
}
