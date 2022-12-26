// import { DataSource } from 'typeorm/data-source';

import { DataSource } from 'typeorm';

const datasource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password123',
  database: 'todo',
  // entities: [`${__dirname}/entities/*{.ts,.js}`],
  // migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  // entities: [`src/entities/*{.ts,.js}`],
  // migrations: [`src/migrations/*{.ts,.js}`],
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
export default datasource;
