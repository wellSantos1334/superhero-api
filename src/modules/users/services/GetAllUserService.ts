import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class GetAllUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute() {
    return await this.userRepository.getAll();
  }
}
