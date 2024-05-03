import { CreateGender } from '../dtos/gender/CreateGenderDTO';
import { UpdateGender } from '../dtos/gender/UpdateGenderDTO';
import { Gender } from '../infra/typeorm/entities/Gender';

export interface IGenderRepository {
  create(data: CreateGender): Promise<Gender>;
  findById(id: number): Promise<Gender | null>;
  getAll(): Promise<Gender[]>;
  update(data: UpdateGender): Promise<void>;
  delete(id: number): Promise<void>;
}
