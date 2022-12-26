"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const datasource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password123',
    database: 'todo',
    entities: ["dist/entities/**/*{.js,.ts}"],
    migrations: ["dist/migrations/**/*{.js,.ts}"],
    subscribers: ["dist/subscribers/**/*{.js,.ts}"],
});
datasource
    .initialize()
    .then(() => {
    console.log(`Data Source has been initialized`);
})
    .catch((err) => {
    console.error(`Data Source initialization error`, err);
});
exports.default = datasource;
//# sourceMappingURL=migration.config.js.map