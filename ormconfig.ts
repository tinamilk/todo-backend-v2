import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password123',
  database: 'todo',
  dropSchema: false,
  migrationsTableName: 'migrations',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
  cli: {
    migrationsDir: './src/migrations',
  },
});
