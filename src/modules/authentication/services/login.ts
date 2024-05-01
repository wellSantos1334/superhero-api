import { inject, injectable } from 'tsyringe';

import type { LoginData } from '../dtos/LoginDTO';

import { createToken } from './manageToken';

import { IUserRepository } from '@/modules/users/repositories/IUserRepository';
import BadRequest from '@/shared/errors/badRequest';
import { comparePassword } from '@/shared/util/Password';

@injectable()
export class LoginService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({ email, cpf, password }: LoginData) {
    let user;

    if (email) {
      user = await this.userRepository.userLoginByEmail(email);
    }

    if (cpf) {
      user = await this.userRepository.userLoginByCpf(cpf);
    }

    if (!user) {
      throw new BadRequest('Email or password incorrect');
    }

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch) {
      throw new BadRequest('Email or password incorrect');
    }

    const token = createToken({
      email: user.email,
      name: user.name,
      sub: user.id,
    });

    return {
      token,
      user: {
        cpf: user.cpf,
        email: user.email,
        name: user.name,
        userId: user.id,
      },
    };
  }
}
