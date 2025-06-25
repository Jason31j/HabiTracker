export class UserCreatedAt {
    value: Date;

    constructor(value: Date) {
        this.ensureIsValid(value);
        this.value = value;
    }

    private ensureIsValid(value: Date): boolean {
        if(value.getTime() > Date.now()) {
            throw new Error('Creation date cannot be in the future');
        }
        return true;
    }
}