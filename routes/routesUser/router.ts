import { Router } from 'express'
import UserController from "../../public/app/controller/UserController";

const routes = Router()

routes.get("/user/findAll", UserController.findAll);
routes.get("/user/findOne/:id", UserController.findOne)
export default routes;
