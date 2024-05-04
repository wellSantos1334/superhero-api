import { inject, injectable } from 'tsyringe';

import Unauthorized from '../../../shared/errors/unauthorized';

import { BlacklistService } from './blackList';

import { IUserRepository } from '@/modules/users/repositories/IUserRepository';

@injectable()
export class LogoutService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    private readonly blacklistService: BlacklistService,
  ) {}

  async execute(authHeader: string | undefined) {
    if (!authHeader) {
      throw new Unauthorized('Token missing');
    }

    const [, token] = authHeader.split(' ');

    await this.blacklistService.addToBlacklist(token);
  }
}
