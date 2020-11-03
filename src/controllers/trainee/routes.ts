import { Router } from 'express';
import TraineeController from './Controller';
import Configuration from './validation';
import validationHandler from '../../libs/validationHandler';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
.get(authMiddleWare('getUsers', 'red'), validationHandler(Configuration.get), TraineeController.get)
.post(authMiddleWare('getUsers', 'write'), validationHandler(Configuration.create), TraineeController.create)
.put(authMiddleWare('getUsers', 'write'), validationHandler(Configuration.update), TraineeController.update)
.delete(authMiddleWare('getUsers', 'delete'), validationHandler(Configuration.delete), TraineeController.delete);

traineeRouter.route('/:id')
    .delete(validationHandler(Configuration.delete), TraineeController.delete);

export default traineeRouter;
