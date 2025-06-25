import { UserCreate } from "../../User/aplication/UserCreate";
import { UserDelete } from "../../User/aplication/UserDelete";
import { UserGetById } from "../../User/aplication/UserGetById";
import { UserGetAll } from "../../User/aplication/UserGetAll";
import { UserUpdate } from "../../User/aplication/UserUpdate";
import { MongoUserRepository } from "../../User/infraestructure/MongoUserRepository";

const userRepository = new MongoUserRepository;

export const ServiceContainer = {
    users: {
        create: new UserCreate(userRepository),
        delete: new UserDelete(userRepository),
        getById:new UserGetById(userRepository),
        getAll: new UserGetAll(userRepository),
        update: new UserUpdate(userRepository),
    }
};