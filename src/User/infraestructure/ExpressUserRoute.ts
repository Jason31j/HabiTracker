import { ExpressUserController } from "./ExpressUserController";
import { Router } from "express";

const controller = new ExpressUserController();
const ExpressUserRouter = Router();

ExpressUserRouter.post("/", controller.create);


export { ExpressUserRouter };