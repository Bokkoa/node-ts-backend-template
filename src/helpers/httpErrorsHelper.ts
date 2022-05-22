interface Error {
    status?: number;
    message?: string;
  }

export class HttpErrorsHelper{

    static notFoundError(subject: string){

        const error:Error = new Error()
        error.status = 404;
        error.message = `${subject} not found`
        throw error
    }

    static badRequestError(subject: string){
        const error:Error = new Error()
        error.status = 400;
        error.message = subject
        throw error
    }

    static unauthorizedError(subject: string){
        const error: Error = new Error()
        error.status = 401;
        error.message = subject
        throw error
    }
}