import { CreateTaskDto } from '../dto/create-task.dto.js';
import { TasksService } from '../services/tasks.service.js';
export declare class TasksController {
    private usersService;
    constructor(usersService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<void>;
}
