import { UserId } from "src/User/domain/UserId";
import { HabitName } from "./HabitName";
import { HabitId } from "./HabitId";

export class Habit{
    private readonly id: HabitId;
    private name: HabitName;
    private description: string | null;
    private readonly userId: UserId;

    constructor(id:HabitId, name:HabitName, description:string, userId:UserId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userId = userId;
    }
}