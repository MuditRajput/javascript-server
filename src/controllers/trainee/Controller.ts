import { Request, Response, NextFunction } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';
import VersionableRepository from '../../repositories/versionable/VersionableRepository';

class TraineeController {
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }
    async get(req: Request, res: Response, next: NextFunction ) {
        try {
            const userRepository = new UserRepositories();
            const extData = await userRepository.findOne({email: 'head.trainer@successive.tech'});
            delete extData.password;
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [extData
                    // {
                    //     data: extData,
                    //     name: 'Trainee1',
                    //     address: 'Noida',
                    // }
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
            const userRepository = new UserRepositories();
            userRepository.update({originalId: '5faa34368ccfa02f7cc5f620', email: 'head.trainer1@successive.tech'});
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
