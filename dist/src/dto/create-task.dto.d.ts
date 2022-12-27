import { User } from "../entities/users-entity.js";
export declare class CreateTaskDto {
    readonly title: string;
    readonly done: boolean;
    readonly taskId: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly userId: User;
}
