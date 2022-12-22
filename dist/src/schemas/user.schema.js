"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../entities/users.entity");
exports.UserSchema = new typeorm_1.EntitySchema({
    name: 'User',
    target: users_entity_1.User,
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        login: {
            type: String,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
        updated_at: {
            type: Date,
        },
        created_at: {
            type: Date,
        },
    },
    relations: {
        task: {
            type: 'one-to-many',
            target: 'Task',
            inverseSide: 'User',
        },
    },
});
//# sourceMappingURL=user.schema.js.map