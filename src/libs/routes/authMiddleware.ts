import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { default as hasPermissions } from '../helper';
import { config } from '../../config';


export default (module, permission) => (req: Request, res: Response, next: NextFunction) => {
    try {
        let decodeUser: any;
        const authorization = 'authorization';
        const secretKey = config.secretKey;
        const token = req.headers[authorization];
        if (!token) {
            next ({
                message: 'Token not found',
                error: 'Unauthenticated',
                status: 403
            });
        }
        decodeUser = jwt.verify(token, secretKey);
        if (!decodeUser || !decodeUser.role) {
            next({
                message: 'role or User not found',
                error: 'Unauthenticated',
                status: 403
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
    }
    catch (err) {
        next({
            message: 'User is Invalid',
            error: 'Unauthenticated',
            status: 403
        });
        return;
    }
};
