import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from '../services/app.service';
import { TasksController } from '../controllers/tasks.controller';
import { TasksModule } from './tasks.module';
// import { TasksService } from '../services/tasks.service';
import { UsersModule } from './users.module';
// import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UsersController } from 'src/controllers/users.controller';
import { typeOrmConfig } from '../config/typeOrm.config';
import { User } from 'src/entities/users.entity';
// import { User } from 'src/entities/users.entity';
// import { Task } from 'src/entities/tasks.entity';
// import { UsersService } from 'src/services/users.service';

config();

// const configService = new ConfigService();

@Module({
  imports: [
    TasksModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
    //   {
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'password123',
    //   database: 'todo',
    //   entities: [User],
    //   synchronize: true,
    // }
  ],
  controllers: [AppController, TasksController, UsersController],
  providers: [AppService],
})
export class AppModule {}
