import { Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: Repository<Task>);
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    remove(id: string): Promise<void>;
}
