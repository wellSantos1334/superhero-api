import { CreateAlignment } from '../dtos/alignment/CreateAlignmentDTO';
import { UpdateAlignment } from '../dtos/alignment/UpdateAlignmentDTO';
import { Alignment } from '../infra/typeorm/entities/Alignment';

export interface IAlignmentRepository {
  create(data: CreateAlignment): Promise<Alignment>;
  findById(id: number): Promise<Alignment | null>;
  getAll(): Promise<Alignment[]>;
  update(data: UpdateAlignment): Promise<void>;
  delete(id: number): Promise<void>;
}
