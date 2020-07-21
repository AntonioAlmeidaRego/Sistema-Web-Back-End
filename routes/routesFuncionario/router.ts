import { Router } from 'express'
import FuncionarioController from "../../public/app/controller/FuncionarioController";


const routes = Router()


routes.get("/funcionario/findAll", FuncionarioController.findAll);
routes.get("/funcionario/findOne/:id", FuncionarioController.findOne)
export default routes;