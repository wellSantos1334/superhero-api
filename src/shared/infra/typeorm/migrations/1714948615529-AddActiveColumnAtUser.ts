import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddActiveColumnAtUser1714948615529 implements MigrationInterface {
  name = 'AddActiveColumnAtUser1714948615529';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "active" boolean NOT NULL DEFAULT true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
  }
}
