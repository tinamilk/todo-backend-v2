"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const tasks_entity_js_1 = require("../entities/tasks-entity.js");
const datasource_config_js_1 = __importDefault(require("../config/datasource.config.js"));
const TaskRepositoty = datasource_config_js_1.default.getRepository(tasks_entity_js_1.Task);
const TaskManger = datasource_config_js_1.default.manager;
let TasksService = class TasksService {
    constructor() {
        this.tasks = [];
    }
    create(task) {
        TaskRepositoty.save({ title: task.title });
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map