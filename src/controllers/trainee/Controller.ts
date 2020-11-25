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
            const users = await this.userRepository.findAll(req.body, {}, {});
            if (!users) {
                return next({
                    message: 'Fetch Unsuccessfull',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: users,
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
        }
    }

    public getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const user = await this.userRepository.getOne(id);
            if (!user) {
                return next({
                    message: 'Fetch Unsuccessfull',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee fetched successfully',
                data: user,
                status: 'success',
            });
        }
        catch (err) {
            next({message: err.message});
        }
    }

    public create = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const user = await this.userRepository.create(req.body);
            if (!user) {
                return next({
                    message: 'User creation failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee created successfully',
                data: user,
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
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
                data: result,
                status: 'success'
            });
        } catch (err) {
            next({message: err.message});
        }
    }
    public delete = async (req: Request, res: Response, next: NextFunction ) => {
        try {
            const id = req.params.id;
            const result = await this.userRepository.delete(id);
            console.log(result);
            if (!result) {
                return next({
                    message: 'Delete Failed',
                    status: 400
                });
            }
            res.status(200).send({
                message: 'trainee deleted successfully',
                data: {},
                status: 'success',
            });
        } catch (err) {
            next({message: err.message});
        }
    }
}

export default TraineeController.getInstance();
