import * as mongoose from 'mongoose';

export default class Database {
    public static open(mongoUrl) {
        return new Promise((resolve, reject) => {
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };
            mongoose.connect(mongoUrl, options, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
                console.log('App is successfully connected to MongoDB');
            });
        });
    }
    public static disconnect() {
        console.log('disconnected');
    }
}
