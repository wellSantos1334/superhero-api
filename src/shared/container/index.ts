import { container } from 'tsyringe';

import { IUserRepository } from '../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/infra/typeorm/repositories/UserRepository';
import { AttributeRepository } from '../../modules/superheroes/infra/typeorm/repositories/AttributeRepository';
import { IAttributeRepository } from '../../modules/superheroes/repositories/IAttributeRepository';

container.register<IUserRepository>('UserRepository', UserRepository);
container.register<IAttributeRepository>(
  'AttributeRepository',
  AttributeRepository,
);
