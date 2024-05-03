import { container } from 'tsyringe';

import { IUserRepository } from '../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/infra/typeorm/repositories/UserRepository';
import { AttributeRepository } from '../../modules/superheroes/infra/typeorm/repositories/AttributeRepository';
import { IAttributeRepository } from '../../modules/superheroes/repositories/IAttributeRepository';
import { SuperpowerRepository } from '../../modules/superheroes/infra/typeorm/repositories/SuperpowerRepository';
import { ISuperpowerRepository } from '../../modules/superheroes/repositories/ISuperpowerRepository';

container.register<IUserRepository>('UserRepository', UserRepository);
container.register<IAttributeRepository>(
  'AttributeRepository',
  AttributeRepository,
);
container.register<ISuperpowerRepository>(
  'SuperpowerRepository',
  SuperpowerRepository,
);
