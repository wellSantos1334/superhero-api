import { inject, injectable } from 'tsyringe';

import { IAttributeRepository } from '../../repositories/IAttributeRepository';
import { UpdateAttribute } from '../../dtos/attribute/UpdateAttributeDTO';

import { FindByIdAttributeService } from './FindByIdAttributeService';

@injectable()
export class UpdateAttributeService {
  constructor(
    @inject('AttributeRepository')
    private readonly attributeRepository: IAttributeRepository,
    private readonly findByIdAttributeService: FindByIdAttributeService,
  ) {}

  async execute(data: UpdateAttribute) {
    await this.findByIdAttributeService.execute(data.id);

    return await this.attributeRepository.update(data);
  }
}
