import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOnDeleteCascadeAtHeroAttribute1714783501731
  implements MigrationInterface
{
  name = 'AddOnDeleteCascadeAtHeroAttribute1714783501731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" DROP CONSTRAINT "FK_70432687bb53ca0739017820a02"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" ADD CONSTRAINT "FK_70432687bb53ca0739017820a02" FOREIGN KEY ("hero_id") REFERENCES "superhero"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" DROP CONSTRAINT "FK_70432687bb53ca0739017820a02"`,
    );
    await queryRunner.query(
      `ALTER TABLE "hero_attribute" ADD CONSTRAINT "FK_70432687bb53ca0739017820a02" FOREIGN KEY ("hero_id") REFERENCES "superhero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
