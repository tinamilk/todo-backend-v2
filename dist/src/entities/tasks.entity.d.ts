import { User } from './users.entity';
export declare class Task {
    id: string;
    title: string;
    done: boolean;
    created_at: Date;
    updated_at: Date;
    user: User;
}
