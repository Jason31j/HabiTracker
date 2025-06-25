import { Response, Request } from "express";
import { ServiceContainer } from "../../Shared/Infraestructure/ServiceContainer";
import {ObjectId} from "mongodb";


export class ExpressUserController{

    async create(req: Request, res: Response) {
        const {name, email, password} = req.body as {
            name: string
            email: string
            password: string
        };

        const _id = new ObjectId().toHexString();
        const createdAt = new Date();

        await ServiceContainer.users.create.execute(
            _id,
            name,
            email,
            password,
            createdAt
        )

        return res.status(201).send({
            status: "success",
            message: "User created successfully",
        });
    }

}