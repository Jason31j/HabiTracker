import { Habit } from './Habit';
import { HabitId } from './HabitId';

export interface HabitRepository {
    createHabit(habit: Habit): Promise<void>;
    getHabitById(habitId: HabitId): Promise<Habit | null>;
    updateHabit(habit: Habit): Promise<void>;
    deleteHabit(habitId: HabitId): Promise<void>;
    getAllHabits(): Promise<Habit[]>;
}