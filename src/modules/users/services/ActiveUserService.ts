import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';
import { addAudit } from '../../../shared/infra/mongo/addAudit';
import { ActiveUser } from '../dtos/ActiveUserDTO';

import { FindByIdUserService } from './FindByIdUserService';

@injectable()
export class ActiveUserService {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    private readonly findByIdUserService: FindByIdUserService,
  ) {}

  async execute(data: ActiveUser, userId: string) {
    const user = await this.findByIdUserService.execute(data.id);

    await this.userRepository.active(data);

    await addAudit({
      userId,
      module: 'User',
      feature: 'Update',
      oldData: { user },
      newData: { ...user, active: data.active },
    });
  }
}
