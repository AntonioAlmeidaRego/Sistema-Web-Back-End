import { Router } from 'express'
import VeiculoController from "../../public/app/controller/VeiculoController";

const routes = Router()
routes.get("/veiculo/findAll", VeiculoController.findAll);
routes.get("/veiculo/findOne/:id", VeiculoController.findOne)
export default routes;
