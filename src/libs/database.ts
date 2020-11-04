import * as mongoose from 'mongoose';

export default class Database {
    public static open(MongoURL) {
        return new Promise((resolve, reject) => {
            mongoose.connect(MongoURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
                console.log('Inside open');
            });
        });
    }
    public static disconnect() {
        console.log('disconnected');
    }
}