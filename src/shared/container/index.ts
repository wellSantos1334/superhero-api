import { container } from 'tsyringe';

import { IUserRepository } from '../../modules/users/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/infra/typeorm/repositories/UserRepository';
import { AttributeRepository } from '../../modules/superheroes/infra/typeorm/repositories/AttributeRepository';
import { IAttributeRepository } from '../../modules/superheroes/repositories/IAttributeRepository';
import { SuperpowerRepository } from '../../modules/superheroes/infra/typeorm/repositories/SuperpowerRepository';
import { ISuperpowerRepository } from '../../modules/superheroes/repositories/ISuperpowerRepository';
import { AlignmentRepository } from '../../modules/superheroes/infra/typeorm/repositories/AlignmentRepository';
import { IAlignmentRepository } from '../../modules/superheroes/repositories/IAlignmentRepository';
import { GenderRepository } from '../../modules/superheroes/infra/typeorm/repositories/GenderRepository';
import { IGenderRepository } from '../../modules/superheroes/repositories/IGenderRepository';
import { ColourRepository } from '../../modules/superheroes/infra/typeorm/repositories/ColourRepository';
import { IColourRepository } from '../../modules/superheroes/repositories/IColourRepository';
import { RaceRepository } from '../../modules/superheroes/infra/typeorm/repositories/RaceRepository';
import { IRaceRepository } from '../../modules/superheroes/repositories/IRaceRepository';
import { PublisherRepository } from '../../modules/superheroes/infra/typeorm/repositories/PublisherRepository';
import { IPublisherRepository } from '../../modules/superheroes/repositories/IPublisherRepository';

container.register<IUserRepository>('UserRepository', UserRepository);
container.register<IAttributeRepository>(
  'AttributeRepository',
  AttributeRepository,
);
container.register<ISuperpowerRepository>(
  'SuperpowerRepository',
  SuperpowerRepository,
);
container.register<IAlignmentRepository>(
  'AlignmentRepository',
  AlignmentRepository,
);
container.register<IGenderRepository>('GenderRepository', GenderRepository);
container.register<IColourRepository>('ColourRepository', ColourRepository);
container.register<IRaceRepository>('RaceRepository', RaceRepository);
container.register<IPublisherRepository>(
  'PublisherRepository',
  PublisherRepository,
);
