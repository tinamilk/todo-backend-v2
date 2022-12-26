import { User } from './user-entity.js';
export declare class Task {
    taskId: string;
    title: string;
    done: boolean;
    created_at: Date;
    updated_at: Date;
    user: User;
}
