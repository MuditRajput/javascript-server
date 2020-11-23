import { Request, Response, NextFunction } from 'express';
import UserRepositories from '../../repositories/user/UserRepository';

class TraineeController {
    private userRepository;
    constructor() {
        this.userRepository = new UserRepositories();
    }
    static instance: TraineeController;
    static getInstance() {
        if (TraineeController.instance) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

    public get = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const extractedData = await this.userRepository.findAll(req.body, {}, {});
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: extractedData,
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }

    public getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const extractedData = await this.userRepository.getOne(id);
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: [extractedData],
                status: 'success',
            });
        }
        catch (err) {
            console.log('error is', err);
        }
    }

    public create = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const result = await this.userRepository.create(req.body);
            res.status(200).send({
                message: 'trainee created successfully',
                data: [result],
                status: 'success',
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public update = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const result = await this.userRepository.update(req.body);
            if (!result) {
                return next({
                    message: 'Update Failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee updated successfully',
                data: [result]
            });
        } catch (err) {
            console.log('error is ', err);
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const id = req.params.id;
            const result = await this.userRepository.delete(id);
            if (!result) {
                return next({
                    message: 'Delete Failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee deleted successfully',
                data: [
                    {
                        Id: id
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
