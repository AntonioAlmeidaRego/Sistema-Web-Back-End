import {Request, Response} from "express";
import FuncionarioService from "../service/FuncionarioService";

class FuncionarioController {
    public async findAll(req: Request, res: Response){
        const users = await FuncionarioService.findAll();
        return res.json(users);
    }

    public async findOne(req: Request, res: Response){
        const user = await FuncionarioService.findOne(Number(req.params.id));
        return res.json(user);
    }
}

export default new FuncionarioController();