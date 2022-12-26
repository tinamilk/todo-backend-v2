import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
// import { User } from './user-entity.js';
import { User }  from './user-entity.js'

@Entity('task')
export class Task {
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

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
