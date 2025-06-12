export class UserId {
    readonly id: string;

    constructor(id: string) {
        this.isValidId(id);
        this.id = id;
    }
    
    private isValidId(id: string): boolean {
        if (id.length === 0) {
            throw new Error('User ID cannot be empty');
        }
        if(id.length < 5) {
            throw new Error('User ID must be between 5 and 50 characters long');
        }
        return true;
    }
}