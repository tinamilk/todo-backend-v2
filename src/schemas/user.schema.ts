import { EntitySchema } from 'typeorm';
import { User } from '../entities/users.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    login: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    updated_at: {
      type: Date,
    },
    created_at: {
      type: Date,
    },
  },
  relations: {
    task: {
      type: 'one-to-many',
      target: 'Task',
      inverseSide: 'User',
    },
  },
});
