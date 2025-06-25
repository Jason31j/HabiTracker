export class UserPassword{
    value: string;

    constructor(value: string) {
        this.isValidPassword(value);
        this.value = value;
    }

    private isValidPassword(value: string): boolean {
        if( value.length < 8 ) {
            throw new Error("Password must be at least 8 characters long.");
        }

        if( !/[A-Z]/.test(value) ) {
            throw new Error("Password must contain at least one uppercase letter.");
        }

        if( !/[!@#$%^&*(),.?":{}|<>]/.test(value) ) {
            throw new Error("Password must contain at least one special character.");
        }
        
        return true;
    }

}