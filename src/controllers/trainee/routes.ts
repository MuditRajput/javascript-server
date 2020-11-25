import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const traineeRouter = Router();
traineeRouter.route('/')
    .get(TraineeController.get)
    .post(TraineeController.create)
    .put(TraineeController.update);

traineeRouter.route('/:id')
    .delete(validationHandler(Validation.delete), TraineeController.delete)
    .get(TraineeController.getOne);

export default traineeRouter;
