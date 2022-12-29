import { ValidatorConstraintInterface } from 'class-validator';
import { Task } from 'src/entities/tasks-entity';
declare const TaskRepository: import("typeorm").Repository<Task>;
export declare class CustomTitleValidator implements ValidatorConstraintInterface {
    private taskRepository;
    constructor(taskRepository: typeof TaskRepository);
    validate(value: string): Promise<boolean>;
    defaultMessage(): string;
}
export {};
