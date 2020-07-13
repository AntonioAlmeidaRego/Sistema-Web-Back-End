import {Request, Response} from "express";
import UserService from "../service/UserService"; 

class UserController {
    public async findAll(req: Request, res: Response){
        const users = await UserService.findAll();
        return res.json(users);
    }

    public async findOne(req: Request, res: Response){
        const user = await UserService.findOne(Number(req.params.id));
        return res.json(user);
    }
}

export default new UserController();
