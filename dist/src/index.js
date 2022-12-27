"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_entity_js_1 = require("./entities/users-entity.js");
const datasource_config_js_1 = __importDefault(require("./config/datasource.config.js"));
const tasks_entity_js_1 = require("./entities/tasks-entity.js");
datasource_config_js_1.default.initialize()
    .then(async () => {
    console.log('Inserting a new user into the database...');
    const user = new users_entity_js_1.User();
    await datasource_config_js_1.default.manager.save(user);
    console.log('Saved a new user with id: ' + user.userId);
    console.log('Loading users from the database...');
    const users = await datasource_config_js_1.default.manager.find(users_entity_js_1.User);
    console.log('Loaded users: ', users);
    const task = new tasks_entity_js_1.Task();
    await datasource_config_js_1.default.manager.save(task);
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map