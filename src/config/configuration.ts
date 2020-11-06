import * as dotenv from 'dotenv';

const envVars = dotenv.config().parsed;
const config: IConfig = {
    port: envVars.port,
    nodeEnv: envVars.node_env,
    secretKey: envVars.secret_key
};
Object.freeze(config);
export default config;
