import express, { Application } from 'express';
import database from './dbConnection';

class Server{

    private _express:Application;
    private _config: any;


    constructor({config, router}: any){
        this._config = config;
        this._express = express().use(router);
    }


    start(){
        return new Promise<void>(resolve => {
            this._express.listen(this._config.PORT, () => {
                console.log(this._config.APPLICATION_NAME + ' Api running on port ' + this._config.PORT )
                
            })

            try{
                database.authenticate();
                console.log('Database Connected');
            }catch( error: any ){
                throw new Error( error );
            }

            resolve()
            
        })
    }
}

export default Server