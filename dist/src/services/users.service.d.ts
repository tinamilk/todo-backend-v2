import { User } from '../entities/user-entity.js';
export declare class UsersService {
    private readonly users;
    create(user: User): void;
    findAll(): User[];
}
