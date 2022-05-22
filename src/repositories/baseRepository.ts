class BaseRepository {

    private model: any;

    constructor( model: any ){
        this.model = model
    }

    async get(id: string){
        return await this.model.findByPk(id);
    }


    async getAll(pageSize=5, pageNumber=1){
        // skip - limit
        const skips = pageSize * (pageNumber - 1); // getting te page as skips

        return await this.model.findAll({
            offset: skips,
            limit: pageSize
        }); // getting the paginated
    }

    async create(entity: any){
        return await this.model.create(entity);
    }

    async update(id: string, entity: any){

        return await this.model.update(entity,
            {
                where: { id }
            })
    }

    async delete(id: any){
        return await this.model.destroy({ where:{id} });
    }
}

export default BaseRepository;