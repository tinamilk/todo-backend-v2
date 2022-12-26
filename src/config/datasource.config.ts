import { DataSource } from 'typeorm';
import { User } from '../entities/user-entity';
import { Task } from '../entities/task-entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password123',
  database: 'todo_base',
  entities: ['dist/src/entities/*{.ts,.js}'],
  // entities: [User, Task],
  migrations: ['dist/src/migrations/{.ts,.js}'],
  // migrationsTableName: 'tasks'
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default AppDataSource

