import { Task } from '../entities/tasks-entity.js';
export declare class TasksService {
    findAll(): Promise<Task[]>;
    create(task: Task): Promise<Task>;
}
