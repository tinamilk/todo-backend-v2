import { Injectable } from '@nestjs/common';
import { User } from '../entities/users-entity.js';
// import { getConnection } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
    // return getConnection().manager.find(Task)
  }
}
