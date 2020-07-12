import "reflect-metadata";
import express from 'express';
import {Router} from "express";
import VeiculoController from "./public/app/controller/VeiculoController";
import {VeiculoModel} from "./public/app/model/VeiculoModel";


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
        let veiculoModel = new VeiculoModel();
        veiculoModel.anoModelo = '2020';
        veiculoModel.marca = 'Fiat';

        let veiculoService = new VeiculoController();
        veiculoService.save(veiculoModel);
        this.router.get("/", (req, res)=>{
            res.json(
               // veiculoModel
            );
        });

        this.express.use("/", this.router);
    }

}

export default new App().express;
