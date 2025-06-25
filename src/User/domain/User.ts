import { UserId} from './UserId';
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

    constructor(id: UserId, name: UserName, email: UserEmail, password: UserPassword, createdAt: UserCreatedAt) {
        this.id = id;
        this.name = name;
        this.email =  email;
        this.password = password;
        this.createdAt = createdAt;
    }
}