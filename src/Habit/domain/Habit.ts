import { UserId } from "src/User/domain/UserId";
import { HabitName } from "./HabitName";
import { HabitId } from "./HabitId";

export class Habit{
    id: HabitId;
    name: HabitName;
    description: string | null;
    userId: UserId;

    constructor(id:HabitId, name:HabitName, description:string, userId:UserId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userId = userId;
    }
}