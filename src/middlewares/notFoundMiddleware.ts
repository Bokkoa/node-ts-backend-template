import { NextFunction, Request, Response } from "express"


export const NotFoundMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404).send({status: 404, message: "Resource not found"})
}