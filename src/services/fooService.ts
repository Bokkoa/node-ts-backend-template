import BaseService from './baseService';
import {FooRepository} from '../repositories';

export class FooService extends BaseService {

    private _fooRepository: FooRepository;
    /**
     * Repository DIY
     */
    constructor({FooRepository}: any) {
        super(FooRepository)
        this._fooRepository = FooRepository
    }

    index(){
        return{
            message: 'Hello world!'
        }
    }

}