import { inject, injectable } from 'tsyringe';

import { CreateSuperheroBattle } from '../../dtos/superhero/CreateSuperheroBattleDTO';
import { IPublisherRepository } from '../../repositories/IPublisherRepository';
import BadRequest from '../../../../shared/errors/badRequest';
import { Publisher } from '../../infra/typeorm/entities/Publisher';

@injectable()
export class CreateSuperheroBattleService {
  constructor(
    @inject('PublisherRepository')
    private readonly publisherRepository: IPublisherRepository,
  ) {}

  async execute(data: CreateSuperheroBattle) {
    const publishers = await this.publisherRepository.getPublisherByIds([
      data.publisherOne,
      data.publisherTwo,
    ]);

    if (publishers.length !== 2) {
      throw new BadRequest(
        'You need pass two publisher to create a SuperheroBattle',
      );
    }

    return await this.createPublisherBattle(publishers);
  }

  private async createPublisherBattle(publishers: Publisher[]) {
    const maxAttributes: {
      [key: string]: {
        superheroName: string;
        attributeValue: number;
        publisher: string;
      };
    } = {};

    publishers.map((publisher) =>
      publisher.superheroes.forEach((superhero) => {
        superhero.heroAttributes.forEach((attribute) => {
          const attributeName = attribute.attribute.attributeName;
          const attributeValue = attribute.attributeValue;

          if (
            !maxAttributes[attributeName] ||
            attributeValue > maxAttributes[attributeName].attributeValue
          ) {
            maxAttributes[attributeName] = {
              superheroName: superhero.superheroName,
              attributeValue: attributeValue,
              publisher: publisher.publisher,
            };
          }
        });
      }),
    );

    return Object.keys(maxAttributes).map((attributeName) => {
      const { superheroName, attributeValue, publisher } =
        maxAttributes[attributeName];
      return `Vencedor no atributo ${attributeName} foi ${superheroName} com o valor de ${attributeValue} | (${publisher})`;
    });
  }
}
