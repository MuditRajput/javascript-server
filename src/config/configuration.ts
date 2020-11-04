import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;
const config: IConfig = {
    port: envVars.port,
    node_env: envVars.node_env,
    MONGO_URL: envVars.MONGO_URL
};
Object.freeze(config);
export default config;
