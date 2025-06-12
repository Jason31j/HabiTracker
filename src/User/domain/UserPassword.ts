export class UserPassword{
    password: string;

    constructor(password: string) {
        this.isValidPassword(password);
        this.password = password;
    }

    private isValidPassword(password: string): boolean {
        if( password.length < 8 ) {
            throw new Error("Password must be at least 8 characters long.");
        }

        if( !/[A-Z]/.test(password) ) {
            throw new Error("Password must contain at least one uppercase letter.");
        }

        if( !/[!@#$%^&*(),.?":{}|<>]/.test(password) ) {
            throw new Error("Password must contain at least one special character.");
        }
        
        return true;
    }

}