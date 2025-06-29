import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserName } from "../domain/UserName";
import { UserEmail } from "../domain/UserEmail";
import { UserPassword } from "../domain/UserPassword";
import { UserCreatedAt } from "../domain/UserCreatedAt";
import { UserRepository } from "../domain/UserRepository";

export class UserCreate{
    constructor(
        private repository: UserRepository
    ) {}

    async execute(
        id: string,
        name: string,
        email: string,
        password: string,
        createdAt: Date
    ): Promise<void> {
        console.log(id, name, email, password, createdAt);
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserPassword(password),
            new UserCreatedAt(createdAt)
        );

        await this.repository.createUser(user);
    }       
}

