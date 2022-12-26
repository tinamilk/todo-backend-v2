import { User } from "../entities/user-entity.js"

export class CreateTaskDto {
    readonly title: string
    readonly done: boolean
    readonly taskId: string
    readonly created_at: Date
    readonly updated_at: Date
    readonly user: User
}