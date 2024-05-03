import { CreateSuperpower } from '../dtos/superpower/CreateSuperpowerDTO';
import { UpdateSuperpower } from '../dtos/superpower/UpdateSuperpowerDTO';
import { Superpower } from '../infra/typeorm/entities/Superpower';

export interface ISuperpowerRepository {
  create(data: CreateSuperpower): Promise<Superpower>;
  findById(id: number): Promise<Superpower | null>;
  getAll(): Promise<Superpower[]>;
  update(data: UpdateSuperpower): Promise<void>;
  delete(id: number): Promise<void>;
}
