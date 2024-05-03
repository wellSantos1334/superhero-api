import { CreateAttribute } from '../dtos/attribute/CreateAttributeDTO';
import { UpdateAttribute } from '../dtos/attribute/UpdateAttributeDTO';
import { Attribute } from '../infra/typeorm/entities/Attribute';

export interface IAttributeRepository {
  create(data: CreateAttribute): Promise<Attribute>;
  findById(id: number): Promise<Attribute | null>;
  getAll(): Promise<Attribute[]>;
  update(data: UpdateAttribute): Promise<void>;
  delete(id: number): Promise<void>;
}
