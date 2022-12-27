"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task1672134900707 = void 0;
class task1672134900707 {
    constructor() {
        this.name = 'task1672134900707';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "login" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_2d443082eccd5198f95f2a36e2c" UNIQUE ("login"), CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "tasks" ("taskId" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid references "users"("userId"), "title" character varying NOT NULL, "done" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3399e2710196ea4bf734751558f" UNIQUE ("title"), CONSTRAINT "PK_c5a68aa4b5c8d38a06f8e8d4c57" PRIMARY KEY ("taskId"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tasks"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.task1672134900707 = task1672134900707;
//# sourceMappingURL=1672134900707-task.js.map