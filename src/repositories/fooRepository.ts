import BaseRepository from './baseRepository';


export class FooRepository extends BaseRepository{
    
    private _foo: any;
    
    constructor({Foo}: any){
        super(Foo)
        this._foo = Foo
    }
}