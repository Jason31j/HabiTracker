import { User } from "./User";
import { UserId } from "./UserId";

export interface UserRepository {
    createUser(user: User): Promise<void>;
    getUserById(userId: UserId): Promise<User | null>;
    updateUser(user: User): Promise<void>;
    deleteUser(userId: UserId): Promise<void>;
    getAllUsers(): Promise<User[]>;
}