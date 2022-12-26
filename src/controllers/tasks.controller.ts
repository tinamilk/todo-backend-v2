import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/create-task.dto';
import { Task } from '../entities/task-entity.js';
import { TasksService } from '../services/tasks.service.js';

@Controller('tasks')
export class TasksController {
    constructor(private usersService: TasksService) {}
    @Get()
    async findAll(): Promise<Task[]> {
        return this.usersService.findAll();
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        this.usersService.create(createTaskDto)
    }
}
