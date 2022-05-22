import { NextFunction, Request, Response } from "express";
import { FooService } from "../services";

// Out of the class (throw error of undefined if not)
let _fooService: FooService;

export class FooController{

    constructor({FooService}: any ) {
        _fooService = FooService;
    }

    async getAll(req: Request, res: Response){
        const foobars = await _fooService.getAll();
        return res.json({
            foobars
        })
    }

    async get( req: Request, res: Response, next: NextFunction){
        try{

            const { id } = req.params;
            const foobar = await _fooService.get(id);
            return res.json({foobar});

        } catch( err:any ) {
            next( err );
        }
    }

    async update( req: Request, res: Response, next: NextFunction){
        try{
            const { id } = req.params;
            const { body } = req;
            const foobar = await _fooService.update(id, body );
            return res.json({foobar});

        } catch( err:any ) {
            next( err );
        }
    }

    async create( req: Request, res: Response, next: NextFunction){
        try{
            const { body } = req;
            const foobar = await _fooService.create(body);
            return res.json({foobar});

        } catch( err:any ) {
            next( err );
        }
    }

    async delete( req: Request, res: Response, next: NextFunction){
        try{
            const { id } = req.params;
            const foobar = await _fooService.delete(id );
            return res.json({foobar});

        } catch( err:any ) {
            next( err );
        }
    }


    index(req: Request, res: Response){
        return res.send(_fooService.index());
    }

}