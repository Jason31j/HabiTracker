import { User } from "../domain/User";
import { UserId } from "../domain/UserId";
import { UserName } from "../domain/UserName";
import { UserPassword } from "../domain/UserPassword";
import { UserEmail } from "../domain/UserEmail";
import {UserCreatedAt} from "../domain/UserCreatedAt";

import { UserRepository } from "../domain/UserRepository";
import { Collection, Db, MongoClient, ObjectId } from "mongodb";


type MongoUser = {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
};

export class MongoUserRepository implements UserRepository {
    private collection!: Collection;
    private client!: MongoClient;
    private db!: Db;

    constructor() {
        const host = process.env.MONGO_HOST || 'db';
        const port = process.env.MONGO_PORT || '27017';
        const dbName = process.env.MONGO_DB_NAME || 'habiTracker';

        const uri = `mongodb://${host}:${port}/${dbName}`;
        //const uri = "mongodb://localhost:27017";
        this.client = new MongoClient(uri);
        this.connect();
    }

    private async connect(): Promise<void> {
        
        try {
            await this.client.connect();
            console.log("Connected to MongoDB");
            this.db = this.client.db(process.env.MONGO_DB_NAME);
            this.collection = this.db.collection('users');
        } catch (error) {
            console.error("MongoDB connection error:", error);
        }
    }

    /*private mapToDomain(user: MongoUser): User{
        return new User(
            new UserId(user._id.toString()),
            new UserName(user.name),
            new UserEmail(user.email),
            new UserPassword(user.password),
            new UserCreatedAt(user.createdAt),
        );
    }*/


    async createUser(user: User): Promise<void> {

        const data = await this.collection.insertOne({
            _id: new ObjectId(user.id.value),
            name: user.name.value,
            email: user.email.value,
            password: user.password.value,
            createdAt: user.createdAt.value,
        });

        if (!data) {    
            throw new Error("Failed to create user");
        }
        console.log("User created successfully");
    }

    async getUserById(id: UserId): Promise<User | null> {
        return null;
    }

    async updateUser(user: User): Promise<void> {
    }

    async deleteUser(id: UserId): Promise<void> {
    }

    async getAllUsers(): Promise<User[]> {
        return [];
    }

}