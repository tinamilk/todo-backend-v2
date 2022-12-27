import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto.js';
import { User } from '../entities/users-entity.js';
import { UsersService } from '../services/users.service.js';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }
}
