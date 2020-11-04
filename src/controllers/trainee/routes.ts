import { Router } from 'express';
import TraineeController from './Controller';
import Configuration from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
.get(authMiddleWare('getUsers', 'read'), validationHandler(Configuration.get), TraineeController.get)
.post(authMiddleWare('getUsers', 'write'), validationHandler(Configuration.create), TraineeController.create)
.put(authMiddleWare('getUsers', 'all'), validationHandler(Configuration.update), TraineeController.update)
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(Configuration.delete), TraineeController.delete);

traineeRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Configuration.delete), TraineeController.delete);

export default traineeRouter;
