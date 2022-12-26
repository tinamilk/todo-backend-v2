import { Task } from './task-entity.js';
export declare class User {
    userId: string;
    email: string;
    login: string;
    created_at: Date;
    updated_at: Date;
    tasks: Task[];
}
