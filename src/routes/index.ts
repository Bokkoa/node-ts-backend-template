import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import { ErrorMiddleware } from '../middlewares';

const Routes = ({
    FooRoutes
}: any) => {
    const router = express.Router();
    const apiRoutes = express.Router();



    apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression())


    apiRoutes.use('/foos', FooRoutes);
    
    router.use('/api', apiRoutes);

    // router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    
    
    

    return router;

}

export default Routes;