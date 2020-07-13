import express, {Router} from 'express';
import routesVeiculo from "./routes/routesVeiculo/router";
import routesUser from "./routes/routesUser/router";

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
        this.express.use(routesUser);
        this.express.use(routesVeiculo);
    }

}

export default new App().express;
