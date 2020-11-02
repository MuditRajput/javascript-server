import { Request, Response, NextFunction } from 'express';
export default (Configuration) => (req: Request, res: Response, next: NextFunction ) => {
    const error = [];
    Object.keys(Configuration).forEach((element) => {
        const i = 0;
        const inObject = Configuration[element];
        const inside = inObject.in[i];
        const a = {
            key : '',
            location: '',
            errorMessage: ''
        };
        if ((inObject.required) && !((req[inside][element]))) {
            a.key = element;
            a.location = (req.method);
            a.errorMessage = inObject.errorMessage || `${element} is invalid`;
            error.push(a);
            return;
        }
        else {
            req[inside][element] = req[inside][element] || inObject.default;
        }
        if ((inObject.number) && !(Number(req[inside][element]))) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = inObject.errorMessage || `${element}'s type is not number`;
            error.push(a);
            return;
        }
        if ((inObject.string) && !(typeof req[inside][element] === 'string')) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = inObject.errorMessage || `${element}'s type is not string`;
            error.push(a);
            return;
        }
        if (!inObject.isObject && !(typeof req[inside][element] === 'object')) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = inObject.errorMessage || `${element}'s type is not string`;
            error.push(a);
            return;
        }
        console.log(req[inside][element]);
    });
    res.send(error);
    next ();
};



