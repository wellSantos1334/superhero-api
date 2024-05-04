import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Gender } from './Gender';
import { Colour } from './Colour';
import { Race } from './Race';
import { Publisher } from './Publisher';
import { Alignment } from './Alignment';
import { HeroAttribute } from './HeroAttribute';
import { Superpower } from './Superpower';

@Entity('superhero')
export class Superhero {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'superhero_name' })
  superheroName: string;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ name: 'height_cm' })
  heightCm: number;

  @Column({ name: 'weight_kg' })
  weightKg: number;

  @ManyToOne(() => Gender, (gender) => gender.superheroes)
  @JoinColumn({ name: 'gender_id' })
  gender: Gender;

  @ManyToOne(() => Colour, (colour) => colour.superheroEyeColours)
  @JoinColumn({ name: 'eye_colour_id' })
  eyeColour: Colour;

  @ManyToOne(() => Colour, (colour) => colour.superheroHairColours)
  @JoinColumn({ name: 'hair_colour_id' })
  hairColour: Colour;

  @ManyToOne(() => Colour, (colour) => colour.superheroSkinColours)
  @JoinColumn({ name: 'skin_colour_id' })
  skinColour: Colour;

  @ManyToOne(() => Race, (race) => race.superheroes)
  @JoinColumn({ name: 'race_id' })
  race: Race;

  @ManyToOne(() => Publisher, (publisher) => publisher.superheroes)
  @JoinColumn({ name: 'publisher_id' })
  publisher: Publisher;

  @ManyToOne(() => Alignment, (alignment) => alignment.superheroes)
  @JoinColumn({ name: 'alignment_id' })
  alignment: Alignment;

  @OneToMany(() => HeroAttribute, (heroAttribute) => heroAttribute.superhero)
  heroAttributes: HeroAttribute[];

  @ManyToMany(() => Superpower, { cascade: true })
  @JoinTable({
    name: 'hero_power',
    joinColumn: { name: 'hero_id' },
    inverseJoinColumn: { name: 'power_id' },
  })
  superpowers: Superpower[];
}
