import { Task } from 'src/entities/tasks.entity';
export declare class User {
    id: string;
    email: string;
    login: string;
    created_at: Date;
    updated_at: Date;
    task: Task[];
}
