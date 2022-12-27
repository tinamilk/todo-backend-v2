import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { User } from './users-entity.js';

@Entity('tasks')
export class Task {
  public static tableName: 'tasks';

  @PrimaryGeneratedColumn('uuid')
  taskId: string;

  @Column({ unique: true })
  title: string;

  @Column({ default: false })
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToOne(() => User, (user) => user)
  // userId: User;
}
