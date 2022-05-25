import { Foo } from '../../../src/models';
import { FooRepository } from '../../../src/repositories';

import { FooModelMock } from '../../mocks'

const { foo, foos } = FooModelMock;

describe('Foo repository tests', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Should return a foo by id", async () => {

        const _foo = {...foo};
        jest.spyOn( Foo, 'findByPk').mockResolvedValueOnce(foo as any); // preparing when findByPk is used return the mock

        const _fooRepository = new FooRepository({Foo});
        const expected = await _fooRepository.get(_foo.id as any);

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_foo);
    });

  
    it("Should return a foos collection", async () => {
        
        jest.spyOn( Foo, 'findAll').mockResolvedValueOnce(foos as any); // preparing when findByPk is used return the mock

        const _fooRepository = new FooRepository({ Foo });
        const expected = await _fooRepository.getAll();
        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(foos);
    });

    it("Should update an especific foo by id", async () => {
        const _foo = { ...foo };

        jest.spyOn( Foo, 'update').mockResolvedValueOnce(foo as any); // preparing when findByPk is used return the mock

        const _fooRepository = new FooRepository({ Foo });
        const expected = await _fooRepository.update(foo.id as unknown as string, {
            name: "Algiz"
        });

        expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_foo);
    });

    it("Should delete an especific foo by id", async () => {

        jest.spyOn( Foo, 'destroy').mockResolvedValueOnce(foo as any); // preparing when findByPk is used return the mock
        const _fooRepository = new FooRepository({ Foo });
        const expected = await _fooRepository.delete(foo.id);
        expect(JSON.parse(JSON.stringify(expected))).toEqual(foo);

    });

 });