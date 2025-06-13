import { HabitId } from "../domain/HabitId";
import { HabitNotFoundError } from "../domain/HabitNotFoundError";
import { HabitRepository } from "../domain/HabitRepository";

export class HabitGetById {
  constructor(private readonly repository: HabitRepository) {}

  async execute(id: string) {

    const habit = await this.repository.getHabitById(new HabitId(id));
    
    if (!habit) {
      throw new HabitNotFoundError('Habit not found');
    }

    return habit;
  }
}