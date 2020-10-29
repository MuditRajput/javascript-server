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
            res.send({
                message: 'trainee fetched successfully',
                data: [
                    {
                        name: 'Trainee1',
                        address: 'Noida',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    post(req: Request, res: Response, next: NextFunction ) {
        try {
            res.send({
                message: 'trainee created successfully',
                data: [
                    {
                        name: 'Trainee2',
                        address: 'Delhi',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    put(req: Request, res: Response, next: NextFunction ) {
        try {
            res.send({
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
            res.send({
                message: 'trainee deleted successfully',
                data: [
                    {
                        name: 'Trainee4',
                        address: 'Faridabad',
                    }
                ]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
}

export default TraineeController.getInstance();
