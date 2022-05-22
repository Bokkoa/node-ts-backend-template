

import Router from 'express';

export const FooRoutes = ({ FooController }: any ) => {

    const router = Router();

    router.get('/helloworld', FooController.index);
    router.get('/', FooController.getAll);
    router.get('/:id', FooController.get);
    router.put('/:id', FooController.update);
    router.delete('/:id', FooController.delete);
    router.post('/', FooController.create);

    return router;

}
