import "reflect-metadata";

import {createConnection} from "typeorm";
import * as console from "console";


export class Repository<T extends Object>{

    // @ts-ignore
    public save(entity: T){
       createConnection().then(async connection=>{
           console.log(connection.isConnected)
           await connection.manager.save(entity);
       }).catch(error => console.log(error));
    }

    public async findAll(entity: T){
        let veiculos = [];
        const connection = await createConnection();
        veiculos = await connection.manager.find(entity.constructor.name);
        await connection.close();
        return veiculos;
    }

    public findOne = async (entity: T,id: number)=>{
        let veiculo = {};
        const connection = await createConnection();
        veiculo = await connection.manager.findOne(entity.constructor.name, id);
        await connection.close();
        return veiculo;
    }



}
