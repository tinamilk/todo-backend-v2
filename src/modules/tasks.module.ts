import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { TasksController } from 'src/controllers/tasks.controller';
import { TasksController } from '../controllers/tasks.controller.js';
// import { Task } from '../entities/tasks.entity.js';
import { TasksService } from '../services/tasks.service.js';

@Module({
  imports: [TypeOrmModule.forFeature()],
  providers: [TasksService],
  controllers: [TasksController],
  exports: [TasksService]
})
export class TasksModule {}
