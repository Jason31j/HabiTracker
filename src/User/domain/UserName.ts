export class UserName {
    private name: string;

    constructor(name: string) {
        this.isValidName(name);
        this.name = name;
    }

    private isValidName(name: string): boolean {
        if (name.length === 0) {
            throw new Error('User name cannot be empty');
        }
        if (name.length < 3 || name.length > 50) {
            throw new Error('User name must be between 3 and 50 characters long');
        }
        return true
    }
}