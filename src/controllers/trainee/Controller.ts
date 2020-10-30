import { Request, Response, NextFunction } from 'express';

class TraineeController {
    static instance: TraineeController;

    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }

        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    get(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [
                    {
                        name: 'Trainee1',
                        address: 'Noida',
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    create(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'trainee created successfully',
                data: [
                    {
                        name: 'Trainee2',
                        address: 'Delhi',
                    }
                ],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    update(req: Request, res: Response, next: NextFunction ) {
        try {
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [
                    {
                        name: 'Trainee3',
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
                message: 'trainee deleted successfully',
                data: [
                    {
                        name: 'Trainee4',
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

export default TraineeController.getInstance();
