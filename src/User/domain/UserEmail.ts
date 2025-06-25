export class UserEmail {
    value: string;

    constructor(value:string){
        if(!this.isValidEmail(value)) {
            throw new Error('Invalid email format');
        }
        this.value = value;
    }

    private isValidEmail(value: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
}