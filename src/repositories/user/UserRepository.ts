import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { IQuery, ICreate } from './entities/interfaces';


export default class UserRepositories extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public getOne(id: string) {
        const finalQuery = { _id: id};
        return super.findOne(finalQuery);
    }

    public findOne(query: IQuery): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return super.findOne(query);
    }

    public findAll(query: IQuery) {
        return super.findAll(query, {}, {});
    }

    public async delete(id: string): Promise<IUserModel> {
        const previous = await this.findOne({ originalId: id, deletedAt: undefined});
        if (previous) {
            return await super.invalidate(id);
        }
    }

    public update(query: IQuery): Promise<IUserModel> {
        return super.update(query);
    }

    public create(data: ICreate): Promise<IUserModel> {
        return super.create(data);
    }

    public count(query: IQuery) {
        return super.count(query);
    }
}
