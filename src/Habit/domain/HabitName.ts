export class HabitName {
    private name: string;

    constructor(name: string) {
        this.isValidName(name);
        this.name = name;
    }

    private isValidName(name: string): boolean {
        if (!name || name.length < 3 || name.length > 50) {
            throw new Error('Habit name must be between 3 and 50 characters long');
        }
        return true;
    }
}