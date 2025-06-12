export class HabitId{
    readonly id: string;

    constructor(id: string) {
        this.isValidId(id);
        this.id = id;
    }

    private isValidId(id: string): boolean {
        if(!id) {
            throw new Error("HabitId cannot be empty");
        }

        if(id.length < 5 || id.length > 50) {
            throw new Error("HabitId must be between 5 and 50 characters long");
        }

        return true;
    }
}