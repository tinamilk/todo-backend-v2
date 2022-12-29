import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto.js';
import { Task } from '../entities/tasks-entity.js';
import { TasksService } from '../services/tasks.service.js';
import AppDataSource from '../config/datasource.config.js';

@Controller('tasks')
export class TasksController {
  constructor(private usersService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(
    @Body({
      async transform(value: Task) {
        const TaskRepository = AppDataSource.getRepository(Task);
        const duplicatedTask = await TaskRepository.findOneBy({
          title: value.title,
        });

        if (duplicatedTask) {
          throw new BadRequestException('Task with the same name exists');
        }
        return value;
      },
    })
    createTaskDto: CreateTaskDto,
  ) {
    return this.usersService.create(createTaskDto);
  }
}
