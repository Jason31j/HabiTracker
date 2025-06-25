export class UserName {
    value: string;

    constructor(value: string) {
        this.isValidName(value);
        this.value = value;
    }

    private isValidName(value: string): boolean {
        if (value.length === 0) {
            throw new Error('User name cannot be empty');
        }
        if (value.length < 3 || value.length > 50) {
            throw new Error('User name must be between 3 and 50 characters long');
        }
        return true
    }
}