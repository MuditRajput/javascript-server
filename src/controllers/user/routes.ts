import { Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/validationHandler';
import Validation from './validation';
import { authMiddleWare } from '../../libs/routes';

const userRouter = Router();

userRouter.route('/me')
    /**
     * @swagger
     * /user/me:
     *   get:
     *     tags:
     *       - user
     *     summary: Profile fetch
     *     security:
     *       - ApiKeyAuth: []
     *     operationId: user Profile
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           $ref: '#/components/schemas/Success'
     *       '403':
     *         description: Invalid status value
     *         schema:
     *           $ref: '#/components/schemas/Error'
     */
    .get(authMiddleWare('getUsers', 'read'), validationHandler(Validation.profile), UserController.profile);


userRouter.route('/login')
    /**
     * @swagger
     * /user/login:
     *   post:
     *     tags:
     *       - user
     *     summary: Logs user into the system
     *     parameters:
     *       - name: body
     *         in: body
     *         example:
     *           email: email@successive.tech
     *           password: passwordHere
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               required: true
     *     responses:
     *       '200':
     *         description: successful operation
     *         schema:
     *           $ref: '#/components/schemas/Login'
     *       '403':
     *         description: Invalid username / password supplied
     *         schema:
     *           $ref: '#/components/schemas/Error'
     */
    .post(validationHandler(Validation.login), UserController.login);

export default userRouter;