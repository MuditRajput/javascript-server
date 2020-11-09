import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';

export default class UserRepositories {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public static findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }

    public create(data: any): Promise<IUserModel> {
        console.log('User Data:', data);
        const id = UserRepositories.generateObjectId();
        const model = new userModel({
            _id: id,
            ...data,
        });
        return model.save();
    }

    public count() {
        return userModel.countDocuments();
    }
}
