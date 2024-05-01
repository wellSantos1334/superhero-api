import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';

import { FindByIdUserService } from './FindByIdUserService';

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    private readonly findByIdUserService: FindByIdUserService,
  ) {}

  async execute(id: string) {
    const user = await this.findByIdUserService.execute(id);

    await this.userRepository.delete(user.id);
  }
}
