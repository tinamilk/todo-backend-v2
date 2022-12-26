import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from '../entities/user-entity.js';
import { UsersService } from '../services/users.service.js';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<void>;
}
