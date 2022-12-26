import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Task } from '../entities/task-entity.js';
import { TasksService } from '../services/tasks.service.js';
export declare class TasksController {
    private usersService;
    constructor(usersService: TasksService);
    findAll(): Promise<Task[]>;
    create(createTaskDto: CreateTaskDto): Promise<void>;
}
