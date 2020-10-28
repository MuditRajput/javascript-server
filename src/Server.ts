import * as express from 'express';
import * as bodyParser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';

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

        app.use(notFoundRoute);

        app.use(errorHandler);
    }

    public initBodyParser() {
        this.app.use(bodyParser.json());
    }

    public run() {
        const { app, config: { port } } = this;

        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`app is running on port ${port}`);
        });
    }

}
export default Server;
