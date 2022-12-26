import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"
// import { Task } from './entities/tasks.entity';

export const AppDataSource = new DataSource({
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
})
