import { StrictOmit } from '../../../shared/util/types/StrictOmitType';
import { Superhero } from '../infra/typeorm/entities/Superhero';

export type SuperheroSaveInput = StrictOmit<Superhero, 'id' | 'heroAttributes'>;
export type SuperheroUpdateInput = StrictOmit<Superhero, 'heroAttributes'>;

export interface ISuperheroRepository {
  create(data: SuperheroSaveInput): Promise<Superhero>;
  findById(id: number): Promise<Superhero | null>;
  getAll(): Promise<Superhero[]>;
  update(data: SuperheroUpdateInput): Promise<void>;
  delete(id: number): Promise<void>;
}
