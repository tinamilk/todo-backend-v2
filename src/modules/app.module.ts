import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller.js';
import { AppService } from '../services/app.service.js';
import { TasksController } from '../controllers/tasks.controller.js';
import { TasksModule } from './tasks.module.js';
import { UsersModule } from './users.module.js';
import { config } from 'dotenv';
import { UsersController } from '../controllers/users.controller.js';
import { TypeOrmModule } from '../modules/typeorm.module.js';
import { UsersService } from '../services/users.service.js';
import { TasksService } from '../services/tasks.service.js';

config();

@Module({
  imports: [
    TasksModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule,
  ],
  controllers: [AppController, TasksController, UsersController],
  providers: [AppService, TasksService, UsersService],
})
export class AppModule {}
