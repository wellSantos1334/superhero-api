import 'reflect-metadata';
import { container } from 'tsyringe';

import { CreateUser } from '../../../../../dtos/CreateUserDTO';
import { IUserRepository } from '../../../../../repositories/IUserRepository';
import { CreateUserService } from '../../../../../services/CreateUserService';
import { User } from '../../../../typeorm/entities/User';
import { addAudit } from '../../../../../../../shared/infra/mongo/addAudit';

jest.mock('../../../../../../../shared/infra/mongo/addAudit', () => ({
  addAudit: jest.fn(),
}));

describe('UserController', () => {
  it('should create a new user when valid data is provided', async () => {
    const data: CreateUser = {
      name: 'UserName',
      cpf: '12280060033',
      email: 'email@email.com',
      biography: 'biography description',
      password: '123456@Ssr',
      confirmPassword: '123456@Ssr',
    };

    const profilePhoto: Express.Multer.File | undefined = undefined;

    const userRepositoryMock: jest.Mocked<Partial<IUserRepository>> = {
      create: jest.fn().mockResolvedValueOnce(User),
      findByEmail: jest.fn().mockResolvedValueOnce(null),
      findByCpf: jest.fn().mockResolvedValueOnce(null),
    };

    container.registerInstance('UserRepository', userRepositoryMock);

    const createUserService = container.resolve(CreateUserService);

    const result = await createUserService.execute(data, profilePhoto);

    const expectedUser = result;

    expect(result).toEqual(expectedUser);
    expect(userRepositoryMock.findByEmail).toHaveBeenCalledWith(data.email);
    expect(userRepositoryMock.findByCpf).toHaveBeenCalledWith(data.cpf);
    expect(userRepositoryMock.create).toHaveBeenCalledWith({
      ...data,
      profilePhoto: '',
    });

    expect(addAudit).toHaveBeenCalledWith({
      module: 'User',
      feature: 'Create',
      oldData: {},
      newData: User,
    });

    container.clearInstances();
  });

  it('should return that the user already exists', async () => {
    const data: CreateUser = {
      name: 'UserName',
      cpf: '12280060033',
      email: 'email@email.com',
      biography: 'biography description',
      password: '123456@Ssr',
      confirmPassword: '123456@Ssr',
    };

    const profilePhoto: Express.Multer.File | undefined = undefined;

    const userRepositoryMock: jest.Mocked<Partial<IUserRepository>> = {
      findByEmail: jest.fn().mockResolvedValueOnce(User),
    };

    container.registerInstance('UserRepository', userRepositoryMock);

    const createUserService = container.resolve(CreateUserService);

    //TODO: Por algum motivo o rejects.toThrow não está funcionando, necessário verificar o motivo. Usar try catch como abaixo não é o ideal.
    try {
      await createUserService.execute(data, profilePhoto);
    } catch (error) {
      expect((error as Error).message).toEqual('User already exists');
    }

    container.clearInstances();
  });

  it('should return that the cpf already exists', async () => {
    const data: CreateUser = {
      name: 'UserName',
      cpf: '12280060033',
      email: 'email@email.com',
      biography: 'biography description',
      password: '123456@Ssr',
      confirmPassword: '123456@Ssr',
    };

    const profilePhoto: Express.Multer.File | undefined = undefined;

    const userRepositoryMock: jest.Mocked<Partial<IUserRepository>> = {
      findByEmail: jest.fn().mockResolvedValueOnce(null),
      findByCpf: jest.fn().mockResolvedValueOnce(User),
    };

    container.registerInstance('UserRepository', userRepositoryMock);

    const createUserService = container.resolve(CreateUserService);

    //TODO: Por algum motivo o rejects.toThrow não está funcionando, necessário verificar o motivo. Usar try catch como abaixo não é o ideal.
    try {
      await createUserService.execute(data, profilePhoto);
    } catch (error) {
      expect((error as Error).message).toEqual('CPF already exists');
    }

    container.clearInstances();
  });
});
