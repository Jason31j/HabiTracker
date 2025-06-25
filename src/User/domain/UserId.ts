export class UserId {
    value: string;

    constructor(value: string) {
        this.isValidId(value);
        this.value = value;
    }
    
    private isValidId(value: string): boolean {
        if (value.length === 0) {
            throw new Error('User ID cannot be empty');
        }
        if(value.length < 5) {
            throw new Error('User ID must be between 5 and 50 characters long');
        }
        return true;
    }
}