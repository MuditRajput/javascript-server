import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { default as hasPermissions } from '../helper';
import { config } from '../../config';


export default (module, permission) => (req: Request, res: Response, next: NextFunction) => {
    let decodeUser: any;
    const authorization = 'authorization';
    const secretKey = config.secret_key;
    if (!req.headers[authorization]) {
        next ({
            message: 'Token not found',
            error: 'Not found',
            status: 404
        });
    }
    const token = req.headers[authorization];
    try {
        decodeUser = jwt.verify(token, secretKey);
    }
    catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Unauthenticated',
            status: 403
        });
        return;
    }
    if (!decodeUser.role) {
        next({
            message: 'role not found',
            error: 'Not Found',
            status: 404
        });
        return;
    }
    if (!hasPermissions(module, decodeUser.role, permission)) {
        return next({
            message: `${decodeUser.role} does not have ${permission} permission in ${module}`,
            error: 'unauthorized',
            status: 403
        });
    }
    next();
};
