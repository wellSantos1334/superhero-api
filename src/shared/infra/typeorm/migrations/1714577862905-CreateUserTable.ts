import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1714577862905 implements MigrationInterface {
  name = 'CreateUserTable1714577862905';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" character varying(36) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "cpf" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "profile_photo" character varying, "biography" character varying(500) NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
