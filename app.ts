import express from 'express';
import {Router} from "express";
import Veiculo from "./public/app/model/VeiculoModel";
import Connection from "./public/app/connection/Connection";

class App {
    public express: express.Application;
    private router: express.Router;
    constructor() {
        this.express = express();
        this.router = Router();
        this.express.use(express.json());
        this.index();
    }

    public index(): void{
        let connection = new Connection('localhost', 3306, 'antonio', 'jesusmaria', 'swv');
        let veiculoModel = new Veiculo();
        veiculoModel.id = 1;
        veiculoModel.anoModelo = '2020';
        veiculoModel.marca = 'Fiat';
        this.router.get("/", (req, res)=>{
            res.json(
                veiculoModel
            );
        });

        this.express.use("/", this.router);
    }

}

export default new App().express;
