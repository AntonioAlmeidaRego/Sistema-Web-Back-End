import VeiculoService from "../service/VeiculoService";
import VeiculoModel from "../model/VeiculoModel";
import {Request, Response} from "express";

class VeiculoController {

    public async findAll(req: Request, res: Response){ 
       const veiculos = await VeiculoService.findAll();
       return res.json(veiculos);
    }

    public async findOne(req: Request, res: Response){
        const veiculo = await VeiculoService.findOne(Number(req.params.id));
        return res.json(veiculo);
    }

    public save(entity: VeiculoModel){
        VeiculoService.save(entity);
    }
}

export default new VeiculoController();
