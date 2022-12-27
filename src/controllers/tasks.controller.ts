import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto.js';
import { Task } from '../entities/tasks-entity.js';
import { TasksService } from '../services/tasks.service.js';

@Controller('tasks')
export class TasksController {
  constructor(private usersService: TasksService) {}

  // @Get()
  // async findAll(): Promise<Task[]> {
  //   return this.usersService.findAll();
  // }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    this.usersService.create(createTaskDto);
  }
}
