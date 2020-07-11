// @ts-ignore
import mysql from 'mysql';
import {Response} from "express";

export default class Connection {
   private _host: string
   private _port: number
   private _user: string
   private _password: string
   private _database: string
   private _connection: any

   constructor(host: string, port: number, user: string, password: string, database: string) {
        this._host = host;
        this._port = port;
        this._user = user;
        this._password = password;
        this._database = database;
        this._connection = mysql();
        this.connection();
   }

   private close(): void{
       this._connection.end();
   }

   private connection(): mysql{
      this._connection.createConnection({
          host: this._host,
          port: this._port,
          user: this._user,
          password: this._password,
          database: this._database
      });

       this._connection.connect(function (err: any) {
           if(err) return console.log(err);
           console.log('conectou!');
       });
   }

   public executeQuery(query: string, res: Response): any{
       let object = this;
       object._connection.query(query, function(error: any, results: any, fields: any){
           if(error)
               res.json(error);
           else
               res.json(results);

           object.close();
           console.log('executou!');
       });
   }
}
