import { FooService } from "../../../src/services";
import { FooRepositoryMock } from "../../mocks";

import { FooModelMock } from "../../mocks";

const { foo, foos } = FooModelMock;


describe("Foo Service Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a foo by id", async () => {
    const FooRepository = FooRepositoryMock;
    FooRepository.get.mockReturnValue(foo);

    const _fooService = new FooService({ FooRepository });
    const expected = await _fooService.get(foo.id as any);
    expect(expected).toMatchObject(foo);
  });

  
  it("Should return a foo collection", async () => {
    const FooRepository = FooRepositoryMock;
    FooRepository.getAll.mockReturnValue(foos);

    const _fooService = new FooService({ FooRepository });
    const expected = await _fooService.getAll();
    expect(expected).toMatchObject(foos);
  });

  it("Should update a foo by id", async () => {
    const FooRepository = FooRepositoryMock;
    FooRepository.update.mockReturnValue(foo);

    const _fooService = new FooService({ FooRepository });
    const expected = await _fooService.update(foo.id  as unknown as string, foo);
    expect(expected).toMatchObject(foo);
  });

  it("Should delete a foo by id", async () => {

    const FooRepository = FooRepositoryMock;
    FooRepository.delete.mockReturnValue(foo);

    const _fooService = new FooService({ FooRepository });

    const expected = await _fooService.delete(foo.id as unknown as string);
    expect(expected).toEqual(foo);
  });
});
