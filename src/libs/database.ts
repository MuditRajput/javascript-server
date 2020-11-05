import * as mongoose from 'mongoose';

export default class Database {
    public static open(MongoURL) {
        return new Promise((resolve, reject) => {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
            mongoose.connect(MongoURL, options, (err) => {
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