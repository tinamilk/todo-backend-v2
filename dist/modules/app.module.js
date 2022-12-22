"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("../controllers/app.controller");
const app_service_1 = require("../services/app.service");
const tasks_controller_1 = require("../controllers/tasks.controller");
const tasks_module_1 = require("./tasks.module");
const users_module_1 = require("./users.module");
const config_2 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const users_controller_1 = require("../controllers/users.controller");
const users_entity_1 = require("../entities/users.entity");
const tasks_entity_1 = require("../entities/tasks.entity");
(0, dotenv_1.config)();
const configService = new config_2.ConfigService();
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tasks_module_1.TasksModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [users_entity_1.User, tasks_entity_1.Task],
                synchronize: true,
                autoLoadEntities: true,
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
            }),
        ],
        controllers: [app_controller_1.AppController, tasks_controller_1.TasksController, users_controller_1.UsersController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map