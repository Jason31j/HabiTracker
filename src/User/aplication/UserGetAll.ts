import { UserRepository } from '../domain/UserRepository';
export class UserGetAll {
  constructor(private repository: UserRepository) {}

  async execute() {
    const users = await this.repository.getAllUsers();
    return users;
  }
}