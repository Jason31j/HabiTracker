import { UserId } from './UserId';
import { UserName } from './UserName';
import { UserEmail } from './UserEmail';
import { UserPassword } from './UserPassword';
import { UserCreatedAt } from './UserCreatedAt';

export class User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    password: UserPassword;
    createdAt: UserCreatedAt;

    constructor(id: string, name: string, email: string, password: string) {
        this.id = new UserId(id);
        this.name = new UserName(name);
        this.email = new UserEmail(email);
        this.password = new UserPassword(password);
        this.createdAt = new UserCreatedAt(new Date());
    }
}