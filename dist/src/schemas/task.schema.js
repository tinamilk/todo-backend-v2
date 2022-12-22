"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const typeorm_1 = require("typeorm");
const tasks_entity_1 = require("../entities/tasks.entity");
exports.TaskSchema = new typeorm_1.EntitySchema({
    name: 'Task',
    target: tasks_entity_1.Task,
    columns: {
        id: {
            type: 'uuid',
            primary: true,
            generated: 'uuid',
        },
        title: {
            type: String,
            unique: true,
        },
        done: {
            type: Boolean,
        },
        updated_at: {
            type: Date,
        },
        created_at: {
            type: Date,
        },
    },
    relations: {
        user: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: true,
        },
    },
});
//# sourceMappingURL=task.schema.js.map