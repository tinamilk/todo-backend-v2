import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service.js';
import { UsersController } from '../controllers/users.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../entities/users.entity.js';

@Module({
  // imports: [TypeOrmModule.forFeature()],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
