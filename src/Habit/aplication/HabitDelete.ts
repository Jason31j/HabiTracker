import { HabitRepository } from "../domain/HabitRepository";
import { HabitId } from "../domain/HabitId";

export class HabitDelete {
  constructor(private readonly repository: HabitRepository) {}

  async execute(habitId: string): Promise<void> {

    const habit = await this.repository.deleteHabit(new HabitId(habitId));
  }
}