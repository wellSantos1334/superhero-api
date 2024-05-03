import { CreatePublisher } from '../dtos/publisher/CreatePublisherDTO';
import { UpdatePublisher } from '../dtos/publisher/UpdatePublisherDTO';
import { Publisher } from '../infra/typeorm/entities/Publisher';

export interface IPublisherRepository {
  create(data: CreatePublisher): Promise<Publisher>;
  findById(id: number): Promise<Publisher | null>;
  getAll(): Promise<Publisher[]>;
  update(data: UpdatePublisher): Promise<void>;
  delete(id: number): Promise<void>;
}
