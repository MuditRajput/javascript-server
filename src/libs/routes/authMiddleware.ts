import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { default as hasPermissions } from '../helper';


export default (module, permission) => (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorization = 'authorization';
        const token = req.headers[authorization];
        const decodeUser = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(permission);
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