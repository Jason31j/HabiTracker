import { UserId } from '../domain/UserId';
import { UserRepository } from '../domain/UserRepository';

export class UserDelete{
    constructor(private repository: UserRepository) {}

    async execute(id: string): Promise<void> {
        await this.repository.deleteUser(new UserId(id));
    }
}