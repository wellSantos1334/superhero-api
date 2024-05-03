import { inject, injectable } from 'tsyringe';

import { IAttributeRepository } from '../../repositories/IAttributeRepository';
import NotFound from '../../../../shared/errors/notFound';

@injectable()
export class FindByIdAttributeService {
  constructor(
    @inject('AttributeRepository')
    private readonly attributeRepository: IAttributeRepository,
  ) {}

  async execute(id: number) {
    const attribute = await this.attributeRepository.findById(id);

    if (!attribute) {
      throw new NotFound('NotFound any Attribute with this id!');
    }

    return attribute;
  }
}
