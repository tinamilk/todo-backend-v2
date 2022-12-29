import { CreateTaskDto } from '../dto/create-task.dto.js';
import { Task } from '../entities/tasks-entity.js';
import { TasksService } from '../services/tasks.service.js';
export declare class TasksController {
    private usersService;
    constructor(usersService: TasksService);
    findAll(): Promise<Task[]>;
    create(createTaskDto: CreateTaskDto): Promise<Task>;
}
