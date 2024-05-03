import { CreateRace } from '../dtos/race/CreateRaceDTO';
import { UpdateRace } from '../dtos/race/UpdateRaceDTO';
import { Race } from '../infra/typeorm/entities/Race';

export interface IRaceRepository {
  create(data: CreateRace): Promise<Race>;
  findById(id: number): Promise<Race | null>;
  getAll(): Promise<Race[]>;
  update(data: UpdateRace): Promise<void>;
  delete(id: number): Promise<void>;
}
