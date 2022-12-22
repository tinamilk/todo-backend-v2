import { EntitySchema } from 'typeorm';
import { Task } from '../entities/tasks.entity';

export const TaskSchema = new EntitySchema<Task>({
  name: 'Task',
  target: Task,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    title: {
      type: String,
      unique: true,
    },
    done: {
      type: Boolean,
    },
    updated_at: {
      type: Date,
    },
    created_at: {
      type: Date,
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      joinColumn: true,
    },
  },
});
