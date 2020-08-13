import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();

//CLASSES ROUTERS
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

//CONNECTIONS ROUTERS
routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;