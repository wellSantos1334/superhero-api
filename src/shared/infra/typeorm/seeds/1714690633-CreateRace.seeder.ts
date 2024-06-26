import { type Seeder } from 'typeorm-extension';
import { type DataSource } from 'typeorm';

import { Race } from '../../../../modules/superheroes/infra/typeorm/entities/Race';

export default class RaceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const raceRepository = dataSource.getRepository(Race);

    await raceRepository.save([
      { id: 1, race: '-' },
      { id: 2, race: 'Alien' },
      { id: 3, race: 'Alpha' },
      { id: 4, race: 'Amazon' },
      { id: 5, race: 'Android' },
      { id: 6, race: 'Animal' },
      { id: 7, race: 'Asgardian' },
      { id: 8, race: 'Atlantean' },
      { id: 9, race: 'Bizarro' },
      { id: 10, race: 'Bolovaxian' },
      { id: 11, race: 'Clone' },
      { id: 12, race: 'Cosmic Entity' },
      { id: 13, race: 'Cyborg' },
      { id: 14, race: 'Czarnian' },
      { id: 15, race: 'Dathomirian Zabrak' },
      { id: 16, race: 'Demi-God' },
      { id: 17, race: 'Demon' },
      { id: 18, race: 'Eternal' },
      { id: 19, race: 'Flora Colossus' },
      { id: 20, race: 'Frost Giant' },
      { id: 21, race: 'God / Eternal' },
      { id: 22, race: 'Gorilla' },
      { id: 23, race: 'Gungan' },
      { id: 24, race: 'Human' },
      { id: 25, race: 'Human / Altered' },
      { id: 26, race: 'Human / Clone' },
      { id: 27, race: 'Human / Cosmic' },
      { id: 28, race: 'Human / Radiation' },
      { id: 29, race: 'Human-Kree' },
      { id: 30, race: 'Human-Spartoi' },
      { id: 31, race: 'Human-Vulcan' },
      { id: 32, race: 'Human-Vuldarian' },
      { id: 33, race: 'Icthyo Sapien' },
      { id: 34, race: 'Inhuman' },
      { id: 35, race: 'Kakarantharaian' },
      { id: 36, race: 'Korugaran' },
      { id: 37, race: 'Kryptonian' },
      { id: 38, race: 'Luphomoid' },
      { id: 39, race: 'Maiar' },
      { id: 40, race: 'Martian' },
      { id: 41, race: 'Metahuman' },
      { id: 42, race: 'Mutant' },
      { id: 43, race: 'Mutant / Clone' },
      { id: 44, race: 'New God' },
      { id: 45, race: 'Neyaphem' },
      { id: 46, race: 'Parademon' },
      { id: 47, race: 'Planet' },
      { id: 48, race: 'Rodian' },
      { id: 49, race: 'Saiyan' },
      { id: 50, race: 'Spartoi' },
      { id: 51, race: 'Strontian' },
      { id: 52, race: 'Symbiote' },
      { id: 53, race: 'Talokite' },
      { id: 54, race: 'Tamaranean' },
      { id: 55, race: 'Ungaran' },
      { id: 56, race: 'Vampire' },
      { id: 57, race: 'Xenomorph XX121' },
      { id: 58, race: 'Yautja' },
      { id: 59, race: 'Yodas species' },
      { id: 60, race: 'Zen-Whoberian' },
      { id: 61, race: 'Zombie' },
    ]);
  }
}
