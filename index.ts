import container from './src/start/container';

const server = container.resolve('app')

server.start();