import { UserRepository } from "../domain/UserRepository";
import { UserId } from "../domain/UserId";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class UserGetById {
  constructor(private repository: UserRepository) {}

  async execute(id: string) {
    const user = await this.repository.getUserById(new UserId(id));
    
    if (!user) throw new UserNotFoundError('User not found');
    
    return user;
  }
}