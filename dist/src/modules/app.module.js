"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_js_1 = require("../controllers/app.controller.js");
const app_service_js_1 = require("../services/app.service.js");
const tasks_controller_js_1 = require("../controllers/tasks.controller.js");
const tasks_module_js_1 = require("./tasks.module.js");
const users_module_js_1 = require("./users.module.js");
const dotenv_1 = require("dotenv");
const users_controller_js_1 = require("../controllers/users.controller.js");
const typeorm_module_js_1 = require("../modules/typeorm.module.js");
const users_service_js_1 = require("../services/users.service.js");
const tasks_service_js_1 = require("../services/tasks.service.js");
(0, dotenv_1.config)();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tasks_module_js_1.TasksModule,
            users_module_js_1.UsersModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            typeorm_module_js_1.TypeOrmModule,
        ],
        controllers: [app_controller_js_1.AppController, tasks_controller_js_1.TasksController, users_controller_js_1.UsersController],
        providers: [app_service_js_1.AppService, tasks_service_js_1.TasksService, users_service_js_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map