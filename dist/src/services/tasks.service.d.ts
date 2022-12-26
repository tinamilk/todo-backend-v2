import { Task } from '../entities/task-entity.js';
export declare class TasksService {
    private readonly tasks;
    create(task: Task): void;
    findAll(): Task[];
}
