import { UserId } from "src/User/domain/UserId";
import { HabitName } from "./HabitName";
import { HabitId } from "./HabitId";
import { HabitDescription } from "./HabitDescription";

export class Habit{
    private readonly id: HabitId;
    private name: HabitName;
    private description: HabitDescription ;
    private readonly userId: UserId;

    constructor(id:HabitId, name:HabitName, description:HabitDescription, userId:UserId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userId = userId;
    }
}