"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password123",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: ["dist/entities/**/*{.js,.ts}"],
    migrations: ["dist/migrations/**/*{.js,.ts}"],
    subscribers: ["dist/subscribers/**/*{.js,.ts}"],
});
//# sourceMappingURL=data-source.js.map