import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), TraineeController.get)
    .post(authMiddleWare('getUsers', 'write'), validationHandler(Validation.create), TraineeController.create)
    .put(authMiddleWare('getUsers', 'all'), validationHandler(Validation.update), TraineeController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), TraineeController.delete);

traineeRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), TraineeController.delete);

export default traineeRouter;
