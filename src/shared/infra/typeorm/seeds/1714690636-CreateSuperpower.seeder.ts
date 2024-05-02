import { type Seeder } from 'typeorm-extension';
import { type DataSource } from 'typeorm';

import { Superpower } from '../../../../modules/superheroes/infra/typeorm/entities/Superpower';

export default class SuperpowerSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    const superpowerRepository = dataSource.getRepository(Superpower);

    await superpowerRepository.save([
      { id: 1, powerName: 'Agility' },
      { id: 2, powerName: 'Accelerated Healing' },
      { id: 3, powerName: 'Lantern Power Ring' },
      { id: 4, powerName: 'Dimensional Awareness' },
      { id: 5, powerName: 'Cold Resistance' },
      { id: 6, powerName: 'Durability' },
      { id: 7, powerName: 'Stealth' },
      { id: 8, powerName: 'Energy Absorption' },
      { id: 9, powerName: 'Flight' },
      { id: 10, powerName: 'Danger Sense' },
      { id: 11, powerName: 'Underwater breathing' },
      { id: 12, powerName: 'Marksmanship' },
      { id: 13, powerName: 'Weapons Master' },
      { id: 14, powerName: 'Power Augmentation' },
      { id: 15, powerName: 'Animal Attributes' },
      { id: 16, powerName: 'Longevity' },
      { id: 17, powerName: 'Intelligence' },
      { id: 18, powerName: 'Super Strength' },
      { id: 19, powerName: 'Cryokinesis' },
      { id: 20, powerName: 'Telepathy' },
      { id: 21, powerName: 'Energy Armor' },
      { id: 22, powerName: 'Energy Blasts' },
      { id: 23, powerName: 'Duplication' },
      { id: 24, powerName: 'Size Changing' },
      { id: 25, powerName: 'Density Control' },
      { id: 26, powerName: 'Stamina' },
      { id: 27, powerName: 'Astral Travel' },
      { id: 28, powerName: 'Audio Control' },
      { id: 29, powerName: 'Dexterity' },
      { id: 30, powerName: 'Omnitrix' },
      { id: 31, powerName: 'Super Speed' },
      { id: 32, powerName: 'Possession' },
      { id: 33, powerName: 'Animal Oriented Powers' },
      { id: 34, powerName: 'Weapon-based Powers' },
      { id: 35, powerName: 'Electrokinesis' },
      { id: 36, powerName: 'Darkforce Manipulation' },
      { id: 37, powerName: 'Death Touch' },
      { id: 38, powerName: 'Teleportation' },
      { id: 39, powerName: 'Enhanced Senses' },
      { id: 40, powerName: 'Telekinesis' },
      { id: 41, powerName: 'Energy Beams' },
      { id: 42, powerName: 'Magic' },
      { id: 43, powerName: 'Hyperkinesis' },
      { id: 44, powerName: 'Jump' },
      { id: 45, powerName: 'Clairvoyance' },
      { id: 46, powerName: 'Dimensional Travel' },
      { id: 47, powerName: 'Power Sense' },
      { id: 48, powerName: 'Shapeshifting' },
      { id: 49, powerName: 'Peak Human Condition' },
      { id: 50, powerName: 'Immortality' },
      { id: 51, powerName: 'Camouflage' },
      { id: 52, powerName: 'Element Control' },
      { id: 53, powerName: 'Phasing' },
      { id: 54, powerName: 'Astral Projection' },
      { id: 55, powerName: 'Electrical Transport' },
      { id: 56, powerName: 'Fire Control' },
      { id: 57, powerName: 'Projection' },
      { id: 58, powerName: 'Summoning' },
      { id: 59, powerName: 'Enhanced Memory' },
      { id: 60, powerName: 'Reflexes' },
      { id: 61, powerName: 'Invulnerability' },
      { id: 62, powerName: 'Energy Constructs' },
      { id: 63, powerName: 'Force Fields' },
      { id: 64, powerName: 'Self-Sustenance' },
      { id: 65, powerName: 'Anti-Gravity' },
      { id: 66, powerName: 'Empathy' },
      { id: 67, powerName: 'Power Nullifier' },
      { id: 68, powerName: 'Radiation Control' },
      { id: 69, powerName: 'Psionic Powers' },
      { id: 70, powerName: 'Elasticity' },
      { id: 71, powerName: 'Substance Secretion' },
      { id: 72, powerName: 'Elemental Transmogrification' },
      { id: 73, powerName: 'Technopath/Cyberpath' },
      { id: 74, powerName: 'Photographic Reflexes' },
      { id: 75, powerName: 'Seismic Power' },
      { id: 76, powerName: 'Animation' },
      { id: 77, powerName: 'Precognition' },
      { id: 78, powerName: 'Mind Control' },
      { id: 79, powerName: 'Fire Resistance' },
      { id: 80, powerName: 'Power Absorption' },
      { id: 81, powerName: 'Enhanced Hearing' },
      { id: 82, powerName: 'Nova Force' },
      { id: 83, powerName: 'Insanity' },
      { id: 84, powerName: 'Hypnokinesis' },
      { id: 85, powerName: 'Animal Control' },
      { id: 86, powerName: 'Natural Armor' },
      { id: 87, powerName: 'Intangibility' },
      { id: 88, powerName: 'Enhanced Sight' },
      { id: 89, powerName: 'Molecular Manipulation' },
      { id: 90, powerName: 'Heat Generation' },
      { id: 91, powerName: 'Adaptation' },
      { id: 92, powerName: 'Gliding' },
      { id: 93, powerName: 'Power Suit' },
      { id: 94, powerName: 'Mind Blast' },
      { id: 95, powerName: 'Probability Manipulation' },
      { id: 96, powerName: 'Gravity Control' },
      { id: 97, powerName: 'Regeneration' },
      { id: 98, powerName: 'Light Control' },
      { id: 99, powerName: 'Echolocation' },
      { id: 100, powerName: 'Levitation' },
      { id: 101, powerName: 'Toxin and Disease Control' },
      { id: 102, powerName: 'Banish' },
      { id: 103, powerName: 'Energy Manipulation' },
      { id: 104, powerName: 'Heat Resistance' },
      { id: 105, powerName: 'Natural Weapons' },
      { id: 106, powerName: 'Time Travel' },
      { id: 107, powerName: 'Enhanced Smell' },
      { id: 108, powerName: 'Illusions' },
      { id: 109, powerName: 'Thirstokinesis' },
      { id: 110, powerName: 'Hair Manipulation' },
      { id: 111, powerName: 'Illumination' },
      { id: 112, powerName: 'Omnipotent' },
      { id: 113, powerName: 'Cloaking' },
      { id: 114, powerName: 'Changing Armor' },
      { id: 115, powerName: 'Power Cosmic' },
      { id: 116, powerName: 'Biokinesis' },
      { id: 117, powerName: 'Water Control' },
      { id: 118, powerName: 'Radiation Immunity' },
      { id: 119, powerName: 'Vision - Telescopic' },
      { id: 120, powerName: 'Toxin and Disease Resistance' },
      { id: 121, powerName: 'Spatial Awareness' },
      { id: 122, powerName: 'Energy Resistance' },
      { id: 123, powerName: 'Telepathy Resistance' },
      { id: 124, powerName: 'Molecular Combustion' },
      { id: 125, powerName: 'Omnilingualism' },
      { id: 126, powerName: 'Portal Creation' },
      { id: 127, powerName: 'Magnetism' },
      { id: 128, powerName: 'Mind Control Resistance' },
      { id: 129, powerName: 'Plant Control' },
      { id: 130, powerName: 'Sonar' },
      { id: 131, powerName: 'Sonic Scream' },
      { id: 132, powerName: 'Time Manipulation' },
      { id: 133, powerName: 'Enhanced Touch' },
      { id: 134, powerName: 'Magic Resistance' },
      { id: 135, powerName: 'Invisibility' },
      { id: 136, powerName: 'Sub-Mariner' },
      { id: 137, powerName: 'Radiation Absorption' },
      { id: 138, powerName: 'Intuitive aptitude' },
      { id: 139, powerName: 'Vision - Microscopic' },
      { id: 140, powerName: 'Melting' },
      { id: 141, powerName: 'Wind Control' },
      { id: 142, powerName: 'Super Breath' },
      { id: 143, powerName: 'Wallcrawling' },
      { id: 144, powerName: 'Vision - Night' },
      { id: 145, powerName: 'Vision - Infrared' },
      { id: 146, powerName: 'Grim Reaping' },
      { id: 147, powerName: 'Matter Absorption' },
      { id: 148, powerName: 'The Force' },
      { id: 149, powerName: 'Resurrection' },
      { id: 150, powerName: 'Terrakinesis' },
      { id: 151, powerName: 'Vision - Heat' },
      { id: 152, powerName: 'Vitakinesis' },
      { id: 153, powerName: 'Radar Sense' },
      { id: 154, powerName: 'Qwardian Power Ring' },
      { id: 155, powerName: 'Weather Control' },
      { id: 156, powerName: 'Vision - X-Ray' },
      { id: 157, powerName: 'Vision - Thermal' },
      { id: 158, powerName: 'Web Creation' },
      { id: 159, powerName: 'Reality Warping' },
      { id: 160, powerName: 'Odin Force' },
      { id: 161, powerName: 'Symbiote Costume' },
      { id: 162, powerName: 'Speed Force' },
      { id: 163, powerName: 'Phoenix Force' },
      { id: 164, powerName: 'Molecular Dissipation' },
      { id: 165, powerName: 'Vision - Cryo' },
      { id: 166, powerName: 'Omnipresent' },
      { id: 167, powerName: 'Omniscient' },
    ]);
  }
}