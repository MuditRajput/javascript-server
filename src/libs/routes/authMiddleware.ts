import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { default as hasPermissions } from '../helper';
import { config } from '../../config';


export default (module, permission) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorization = 'authorization';
        const token = req.headers[authorization];
        const secretKey = config.secret_key;
        const decodeUser = jwt.verify(token, secretKey);
        if (!hasPermissions(module, decodeUser.role, permission)) {
            return next({
                error: 'unauthorized',
                status: 403
            });
        }
        next();
    }
    catch (err) {
        next({
            error: 'unauthorized access',
            status: 403
        });
    }
};
