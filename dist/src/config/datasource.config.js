"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password123',
    database: 'todo_base',
    entities: ['dist/src/entities/*{.ts,.js}'],
    migrations: ['src/migrations/*{.ts,.js}'],
    synchronize: true,
});
AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
exports.default = AppDataSource;
//# sourceMappingURL=datasource.config.js.map