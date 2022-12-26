import { User } from "./entities/user-entity.js"
import AppDataSource from "./config/datasource.config.js"
import { Task } from "./entities/task-entity.js"
// import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.userId)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    const task = new Task()
    await AppDataSource.manager.save(task)

}).catch(error => console.log(error))
