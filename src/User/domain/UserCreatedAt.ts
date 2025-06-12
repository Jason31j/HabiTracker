export class UserCreatedAt {
    readonly createdAt: Date;

    constructor(createdAt: Date) {
        this.ensureIsValid(createdAt);
        this.createdAt = createdAt;
    }

    private ensureIsValid(date: Date): boolean {
        if (!(this.createdAt instanceof Date)) {
            throw new Error('Invalid date format');
        }
        if(this.createdAt.getTime() > Date.now()) {
            throw new Error('Creation date cannot be in the future');
        }
        return true;
    }
}