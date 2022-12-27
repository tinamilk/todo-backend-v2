import { Injectable } from '@nestjs/common';
import { Task } from '../entities/tasks-entity.js';
import AppDataSource from '../config/datasource.config.js';

const TaskRepositoty = AppDataSource.getRepository(Task);
const TaskManger = AppDataSource.manager;

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  create(task: Task) {
    TaskRepositoty.save({ title: task.title });
  }

  // findAll(): Promise<Task[]> {
  //   // return this.tasks;
  //   // return getConnection().manager.find(Task);
  // }
}
