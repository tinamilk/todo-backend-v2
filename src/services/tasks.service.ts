import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task-entity.js';

@Injectable()
export class TasksService {
    private readonly tasks: Task[] = [];

  create(task: Task) {
    this.tasks.push(task)
  }

  findAll(): Task[] {
    return this.tasks
  }
}
