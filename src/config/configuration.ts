import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;
const config: IConfig = {
    port: envVars.port,
    node_env: envVars.node_env,
    secret_key: envVars.secret_key
};
Object.freeze(config);
export default config;
