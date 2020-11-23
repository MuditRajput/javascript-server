import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepositories extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public getOne(id: string) {
        const finalQuery = { _id: id};
        return super.findOne(finalQuery);
    }

    public findOne(query: any): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return super.findOne(query);
    }

    public findAll(query: any) {
        return super.findAll(query, {}, {});
    }

    public async delete(id: string): Promise<IUserModel> {
        const previous = await this.findOne({ originalId: id, deletedAt: undefined});
        if (previous) {
            return await super.invalidate(id);
        }
    }

    public update(query: any): Promise<IUserModel> {
        return super.update(query);
    }

    public create(data: any): Promise<IUserModel> {
        return super.create(data);
    }

    public count(query: any) {
        return super.count(query);
    }
}
