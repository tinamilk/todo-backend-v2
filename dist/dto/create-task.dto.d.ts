import { User } from '../entities/users-entity.js';
export declare class CreateTaskDto {
    title: string;
    done: boolean;
    taskId: string;
    created_at: Date;
    updated_at: Date;
    userId: User;
}
