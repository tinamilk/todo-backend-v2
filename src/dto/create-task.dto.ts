import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/users-entity.js';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  done: boolean;
  taskId: string;
  created_at: Date;
  updated_at: Date;
  userId: User;
}
