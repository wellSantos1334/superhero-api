import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { addAudit } from '../../../shared/infra/mongo/addAudit';

import { FindByIdUserService } from './FindByIdUserService';

@injectable()
export class DeleteUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    private readonly findByIdUserService: FindByIdUserService,
  ) {}

  async execute(id: string, userId: string) {
    const user = await this.findByIdUserService.execute(id);

    await this.userRepository.delete(user.id);

    await addAudit({
      userId,
      module: 'User',
      feature: 'Delete',
      oldData: { user },
      newData: {},
    });
  }
}
