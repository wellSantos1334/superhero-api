import { type Seeder } from 'typeorm-extension';
import { type DataSource } from 'typeorm';

import { User } from '../../../../modules/users/infra/typeorm/entities/User';
import { hashPassword } from '../../../util/Password';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const userRepository = dataSource.getRepository(User);

    await userRepository.save({
      id: 'a606d75b-2cc4-451a-85ed-9a31fe5b8bd4',
      name: 'userName',
      cpf: '12250060040',
      email: 'email@teste.com',
      biography: 'biography description',
      password: hashPassword('123123@Ssr'),
      active: true,
    });
  }
}
