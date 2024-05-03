import { inject, injectable } from 'tsyringe';

import { IAttributeRepository } from '../../repositories/IAttributeRepository';

import { FindByIdAttributeService } from './FindByIdAttributeService';

@injectable()
export class DeleteAttributeService {
  constructor(
    @inject('AttributeRepository')
    private readonly attributeRepository: IAttributeRepository,
    private readonly findByIdAttributeService: FindByIdAttributeService,
  ) {}

  async execute(id: number) {
    const attribute = await this.findByIdAttributeService.execute(id);

    return await this.attributeRepository.delete(attribute.id);
  }
}
