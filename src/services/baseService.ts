import { HttpErrorsHelper } from '../helpers'

class BaseService{

    private repository: any;

    constructor(repository: any){
        this.repository = repository
    }

    async get(id: string){

        if(!id){
            HttpErrorsHelper.badRequestError('id must be send')
        }

        const currentEntity = await this.repository.get(id);
        
        if(!currentEntity){
            HttpErrorsHelper.notFoundError('entity')
        }

        return currentEntity

    }

    async getAll(pageSize: Number = 10, pageNumber: Number = 1){
        return await this.repository.getAll();
    }

    async create(entity: any){
        return await this.repository.create(entity)
    }

    async update(id: string, entity: any){

        if(!id){
            HttpErrorsHelper.badRequestError('id must be send')
        }
        
        if(!await this.repository.get(id)){
            HttpErrorsHelper.notFoundError('entity')
        }

        return await this.repository.update(id, entity);
        
    }


    async delete(id: string){

        if(!id){
            HttpErrorsHelper.badRequestError('id must be send')
        }

        const entityFound = await this.repository.get(id)
        if(!entityFound){
            HttpErrorsHelper.notFoundError('entity')
        }
        
        const deleted = await this.repository.delete(id);
        
        if(!deleted) throw('Can delete entity')

        return entityFound
    }
}


export default BaseService