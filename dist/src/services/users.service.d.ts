import { User } from '../entities/users-entity.js';
export declare class UsersService {
    private readonly users;
    create(user: User): void;
    findAll(): User[];
}
