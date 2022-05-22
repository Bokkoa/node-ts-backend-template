import { createContainer, 
         asClass, 
         asValue, 
         asFunction, 
         AwilixContainer } from "awilix";

import Config from '../config';

// services
import { FooService } from "../services";

// controllers
import {FooController} from '../controllers';

// routes
import Routes from "../routes";
import { FooRoutes } from '../routes/indexRoutes';

// Repositories
import { FooRepository } from "../repositories";

// Models
import { Foo } from "../models";


import Server from ".";

const container:AwilixContainer = createContainer();

container.register({
    app: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(Config)
}).register({
    FooService: asClass(FooService).singleton()
}).register({
    FooController: asClass(FooController.bind(FooController)),
}).register({
    FooRoutes: asFunction(FooRoutes).singleton(),
}).register({
    Foo: asValue(Foo),
}).register({
    FooRepository: asClass(FooRepository),
})

export default container;