import { Task } from "src/entities/task-entity";
export declare class CreateUserDto {
    readonly login: string;
    readonly email: string;
    readonly userId: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly tasks: Task[];
}
