import { Router } from 'express';
import TraineeController from './Controller';
import Configuration from './validation';
import validationHandler from '../../libs/validationHandler';

const traineeRouter = Router();

traineeRouter.route('/')
.get(validationHandler(Configuration.get), TraineeController.get)
.post(validationHandler(Configuration.create), TraineeController.create)
.put(validationHandler(Configuration.update), TraineeController.update)
.delete(validationHandler(Configuration.delete), TraineeController.delete);

traineeRouter.route('/:id')
    .delete(validationHandler(Configuration.delete), TraineeController.delete);

export default traineeRouter;
