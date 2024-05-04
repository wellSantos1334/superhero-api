import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { omit } from '../../../shared/util/Omit';
import NotFound from '../../../shared/errors/notFound';
import { addLog } from '../../../shared/infra/mongo/addLog';

@injectable()
export class FindByIdUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      await addLog({
        log: 'NotFound',
        message: 'NotFound any User with this id!',
      });
      throw new NotFound('NotFound any User with this id!');
    }

    return omit(user, ['password']);
  }
}
