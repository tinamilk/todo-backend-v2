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
exports.TypeOrmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const datasource_config_js_1 = __importDefault(require("../config/datasource.config.js"));
let TypeOrmModule = class TypeOrmModule {
};
TypeOrmModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: typeorm_1.DataSource,
                useFactory: async () => {
                    await datasource_config_js_1.default.initialize();
                    return datasource_config_js_1.default;
                },
            },
        ],
        exports: [typeorm_1.DataSource],
    })
], TypeOrmModule);
exports.TypeOrmModule = TypeOrmModule;
//# sourceMappingURL=typeorm.module.js.map