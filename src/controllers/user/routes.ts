import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const userRouter = Router();
userRouter.route('/me')
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.profile), UserController.profile);
userRouter.route('/login')
    .post(validationHandler(Validation.login), UserController.login);

export default userRouter;