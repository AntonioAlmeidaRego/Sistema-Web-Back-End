import "reflect-metadata";

import {createConnection, getManager} from "typeorm";
import * as console from "console";


export class Repository<T extends Object>{

    // @ts-ignore
    public save(entity: T){
       createConnection().then(async connection=>{
           console.log(connection.isConnected)
           await connection.manager.save(entity);
       }).catch(error => console.log(error));
    }

    public findOne = async (id: number)=>{

    }



}
