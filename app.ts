

// @ts-ignore
import express, {Router} from 'express';
import VeiculoModel from "./public/app/model/VeiculoModel";
import VeiculoController from "./public/app/controller/VeiculoController";
import routes from "./routes/routesVeiculo/router";
class App {
    public express: express.Application
    private router: express.Router;
    constructor() {
        this.express = express();
        this.router = Router();
        this.express.use(express.json());
        this.index();
    }

    public index(): void{
        this.express.use(routes);
    }

}

export default new App().express;
