import * as mongoose from 'mongoose';
import { DocumentQuery, Query } from 'mongoose';
import IUserModel from '../user/IUserModel';

export default class VersionableRepository <D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    public model: M;

    constructor(model) {
        this.model = model;
    }
    public async create(data: IUserModel): Promise<D> {
        const id = VersionableRepository.generateObjectId();
        const model = new this.model({
            ...data,
            _id: id,
            originalId: id,
        });
        return await model.save();
    }
    public count(query: any): Query<number> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.count(finalQuery);
    }
    public readOne(query: any): DocumentQuery<D, D> {
        console.log(this.model);
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.findOne(finalQuery);
    }
    public find(query: any, projection: any, options: any): DocumentQuery<D[], D> {
        const finalQuery = {deletedAt: undefined, ...query};
        return this.model.find(finalQuery, projection, options);
    }
    // public invalidate(id: any): DocumentQuery<D, D> {
    //     const query = { originalId: id, deletedAt: { $exists: false} };
    //     const options = {
    //         upsert: true
    //     };
    //     return this.model.update(query, {deletedAt: Date.now()}, options);
    // }
    public async userupdate(data: any): Promise<D> {
        const previous = await this.readOne({ originalId: data.originalId, deletedAt: undefined});
        console.log('previous: ', previous);
        if (previous) {
            // await this.invalidate(data.originalId);
        }
        const newData = Object.assign(JSON.parse(JSON.stringify(previous, data)));
        newData._id = VersionableRepository.generateObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return await model.save();
    }
}
