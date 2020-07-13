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

    public async findAll(entity: string){
        let veiculos = [];
        const connection = await createConnection();
        veiculos = await connection.manager.find(entity);
        await connection.close();
        return veiculos;
    }

    public findOne = async (entity: string,id: number)=>{
        let veiculo = {};
        const connection = await createConnection();
        veiculo = await connection.manager.findOne(entity, id);
        await connection.close();
        return veiculo;
    }



}
