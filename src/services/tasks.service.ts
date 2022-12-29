import { Injectable } from '@nestjs/common';
import { Task } from '../entities/tasks-entity.js';
import AppDataSource from '../config/datasource.config.js';

const TaskRepository = AppDataSource.getRepository(Task);

@Injectable()
export class TasksService {
  findAll() {
    return TaskRepository.find({
      select: {
        done: false,
      },
    });
  }
  async create(task: Task) {
    await TaskRepository.save({ title: task.title });
    return task;
  }
}
