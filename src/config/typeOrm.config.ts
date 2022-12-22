import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config();

const configService = new ConfigService();

// export default new DataSource({
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  migrationsRun: true,
  logging: true,
  logger: 'file',
  synchronize: false,
};
