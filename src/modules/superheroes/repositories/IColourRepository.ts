import { CreateColour } from '../dtos/colour/CreateColourDTO';
import { UpdateColour } from '../dtos/colour/UpdateColourDTO';
import { Colour } from '../infra/typeorm/entities/Colour';

export interface IColourRepository {
  create(data: CreateColour): Promise<Colour>;
  findById(id: number): Promise<Colour | null>;
  getAll(): Promise<Colour[]>;
  update(data: UpdateColour): Promise<void>;
  delete(id: number): Promise<void>;
}
