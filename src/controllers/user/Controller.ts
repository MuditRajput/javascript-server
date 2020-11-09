import { Request, Response, NextFunction } from 'express';
import { config } from '../../config';
import * as jwt from 'jsonwebtoken';
import UserRepositories from '../../repositories/user/UserRepository';

class UserController {
    static instance: UserController;

    static getInstance() {
        if (UserController.instance) {
            return UserController.instance;
        }

        UserController.instance = new UserController();
        return UserController.instance;
    }

    get(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User fetched successfully',
                data: [res.locals.userData],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction ) {
        try {
            UserRepositories.findOne({email: req.body.email, password: req.body.password})
                .then((data) => {
                    if (data.email === req.body.email && data.password === req.body.password) {
                        const payLoad = {
                            'iss': 'Successive Technologies',
                            'iat': 1604858574,
                            'exp': 1636394601,
                            'aud': 'www.successive.in',
                            'sub': 'Learn and Implement',
                            'email': req.body.email,
                            'password': req.body.password
                        };
                        const secret = config.secretKey;
                        const tokenGenerated = jwt.sign(payLoad, secret);
                        res.status(200).send({
                            message: 'User created successfully',
                            data: [
                                {
                                    token: tokenGenerated,
                                    name: 'User2',
                                    address: 'Delhi',
                                }
                            ],
                            status: 'success',
                        });
                    }
                })
                .catch((err) => {
                    next ({
                        message: 'invalid email or password',
                        error: 'Authentication Failed',
                        status: 403
                    });
                });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User updated successfully',
                data: [
                    {
                        name: 'User3',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    delete(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'User deleted successfully',
                data: [
                    {
                        name: 'User4',
                        address: 'Faridabad',
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default UserController.getInstance();
