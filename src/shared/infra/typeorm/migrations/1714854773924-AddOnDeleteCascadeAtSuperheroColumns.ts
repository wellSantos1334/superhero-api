import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOnDeleteCascadeAtSuperheroColumns1714854773924
  implements MigrationInterface
{
  name = 'AddOnDeleteCascadeAtSuperheroColumns1714854773924';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_a0c86f7e12906eb64001a15ecb4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_46970fe24f60b5d921cf758a4b6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_1f74ec4f63daad0be9f0c1d1f9b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_2046eca8f1a68399ba82a4556d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_3531077b53b3a81bb9c497bf038"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_7e0c912655b9221b48f3bac91cd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_172c7f39e3c00b1923ece2f033e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" DROP CONSTRAINT "FK_744de04e162ee8c08feb9fe7c98"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_a0c86f7e12906eb64001a15ecb4" FOREIGN KEY ("gender_id") REFERENCES "gender"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_46970fe24f60b5d921cf758a4b6" FOREIGN KEY ("eye_colour_id") REFERENCES "colour"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_1f74ec4f63daad0be9f0c1d1f9b" FOREIGN KEY ("hair_colour_id") REFERENCES "colour"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_2046eca8f1a68399ba82a4556d7" FOREIGN KEY ("skin_colour_id") REFERENCES "colour"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_3531077b53b3a81bb9c497bf038" FOREIGN KEY ("race_id") REFERENCES "race"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_7e0c912655b9221b48f3bac91cd" FOREIGN KEY ("publisher_id") REFERENCES "publisher"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_172c7f39e3c00b1923ece2f033e" FOREIGN KEY ("alignment_id") REFERENCES "alignment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" ADD CONSTRAINT "FK_744de04e162ee8c08feb9fe7c98" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" DROP CONSTRAINT "FK_744de04e162ee8c08feb9fe7c98"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_172c7f39e3c00b1923ece2f033e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_7e0c912655b9221b48f3bac91cd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_3531077b53b3a81bb9c497bf038"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_2046eca8f1a68399ba82a4556d7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_1f74ec4f63daad0be9f0c1d1f9b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_46970fe24f60b5d921cf758a4b6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" DROP CONSTRAINT "FK_a0c86f7e12906eb64001a15ecb4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" ADD CONSTRAINT "FK_744de04e162ee8c08feb9fe7c98" FOREIGN KEY ("attribute_id") REFERENCES "attribute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_172c7f39e3c00b1923ece2f033e" FOREIGN KEY ("alignment_id") REFERENCES "alignment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_7e0c912655b9221b48f3bac91cd" FOREIGN KEY ("publisher_id") REFERENCES "publisher"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_3531077b53b3a81bb9c497bf038" FOREIGN KEY ("race_id") REFERENCES "race"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_2046eca8f1a68399ba82a4556d7" FOREIGN KEY ("skin_colour_id") REFERENCES "colour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_1f74ec4f63daad0be9f0c1d1f9b" FOREIGN KEY ("hair_colour_id") REFERENCES "colour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_46970fe24f60b5d921cf758a4b6" FOREIGN KEY ("eye_colour_id") REFERENCES "colour"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "superhero" ADD CONSTRAINT "FK_a0c86f7e12906eb64001a15ecb4" FOREIGN KEY ("gender_id") REFERENCES "gender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
