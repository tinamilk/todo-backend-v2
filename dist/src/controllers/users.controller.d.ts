import { CreateUserDto } from '../dto/create-user.dto.js';
import { User } from '../entities/users-entity.js';
import { UsersService } from '../services/users.service.js';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<void>;
}
