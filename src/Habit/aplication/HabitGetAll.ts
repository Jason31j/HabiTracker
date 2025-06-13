import { Habit } from '../domain/Habit';
import { HabitRepository } from '../domain/HabitRepository';

export class HabitGetAll {
  constructor(private readonly repository: HabitRepository) {}

  async execute(): Promise<Habit[]> {
    return await this.repository.getAllHabits();
  }
}