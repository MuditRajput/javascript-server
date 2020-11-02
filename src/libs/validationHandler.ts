import { Request, Response, NextFunction } from 'express';
export default (Configuration) => (req: Request, res: Response, next: NextFunction ) => {
    const error = [];
    Object.keys(Configuration).forEach((element) => {
        const i = 0;
        const inObject = Configuration[element];
        const inside = inObject.in[i];
        let value = req[inside][element];
        const a = {
            key : '',
            location: '',
            errorMessage: ''
        };
        if ((inObject.required) && !(value)) {
            a.key = element;
            a.location = (req.method);
            a.errorMessage = inObject.errorMessage || `${element} is invalid`;
            error.push(a);
            return;
        }
        else {
            value = value || inObject.default;
        }
        if ((inObject.number) && !(Number(value))) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = inObject.errorMessage || `${element}'s type is not number`;
            error.push(a);
            return;
        }
        if ((inObject.string) && !(typeof value === 'string')) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = inObject.errorMessage || `${element}'s type is not string`;
            error.push(a);
            return;
        }
        const regex = inObject.regex;
        if ((regex) && !regex.test(value)) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = inObject.errorMessage || `${element}'s type is not string`;
            error.push(a);
            return;
        }
        if ((inObject.isObject && !(typeof value === 'object'))) {
            a.key = element;
            a.location = req.method;
            a.errorMessage = `${element}'s type is not object`;
            error.push(a);
            return;
        }
        console.log(`inside ${req.method} values are ${value}`);
    });
    if (error.length > 0) {
        return res.status(400).send(error);
    }
    next ();
};



