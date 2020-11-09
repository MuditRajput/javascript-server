import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const userRouter = Router();
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.get), UserController.get);
userRouter.route('/login')
    .post(validationHandler(Validation.create), UserController.create);
userRouter.route('/')
    .put(authMiddleWare('getUsers', 'all'), validationHandler(Validation.update), UserController.update)
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), UserController.delete);

userRouter.route('/:id')
    .delete(authMiddleWare('getUsers', 'delete'), validationHandler(Validation.delete), UserController.delete);

export default userRouter;