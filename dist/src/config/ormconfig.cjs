"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataSource = require('typeorm');
const config = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password123',
    database: 'todo',
    entities: [
        'src/entities/user-entity{ts,js}',
        'src/entities/task-entity{ts,js}',
    ],
    migrations: ['src/migrations/*{ts,js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    logger: 'file',
});
module.exports = config;
//# sourceMappingURL=ormconfig.cjs.map