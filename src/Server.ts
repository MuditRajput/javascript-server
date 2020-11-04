import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';
import routes from './router';
import Database from './libs/database';

class Server {
    private app;
    constructor(private config) {
        this.app = express();
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
        const { app } = this;
        app.get('/health-check', (req, res) => {
            res.send('I am OK');
        });
        app.use('/api', routes);

        app.use(notFoundRoute);

        app.use(errorHandler);
    }

    public initBodyParser() {
        this.app.use(bodyParser.json());
    }

    public run() {
        const { app, config: { port , MONGO_URL } } = this;
        Database.open(MONGO_URL)
            .then((res) => {
                app.listen(port, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`app is running on port ${port}`);
                });
                console.log('App is successfully connected to MongoDB');
            })
            .catch((err) => {
                console.log(err);
            });
    }

}
export default Server;
