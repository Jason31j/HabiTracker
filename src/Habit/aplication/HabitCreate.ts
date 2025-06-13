import { Habit } from "../domain/Habit";
import { HabitId } from "../domain/HabitId";
import { HabitName } from "../domain/HabitName";
import { HabitDescription } from "../domain/HabitDescription";
import { UserId } from "../../User/domain/UserId";
import { HabitRepository } from "../domain/HabitRepository";

export class HabitCreate{
    constructor(
        private repository: HabitRepository
    ) {}

    async execute(id: string, name: string, description: string, userId: string): Promise<void> {
        const habit = new Habit(
            new HabitId(id),
            new HabitName(name),
            new HabitDescription(description),
            new UserId(userId),
        );

        await this.repository.createHabit(habit);
    }
}