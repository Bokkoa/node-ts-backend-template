import {  NextFunction, Request, Response } from "express";

interface Error{
    status?: number,
    message?: string
}

export const ErrorMiddleware = (err:Error , req: Request, res: Response, next: NextFunction) => {
    console.log("Entra!!!!")
    const httpStatus = err.status || 500;
    
    return res.status(httpStatus).send({
        status: httpStatus,
        message: err.message || "Internal server error" 
    })
}