import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Superhero } from './Superhero';

@Entity('publisher')
export class Publisher {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  publisher: string;

  @OneToMany(() => Superhero, (superhero) => superhero.publisher)
  superheroes: Superhero[];
}
