const envVar = process.env;

const isProduction =  envVar.NODE_ENV === 'production';
const mongoConfig = {
    username: envVar.MONGO_INITDB_ROOT_USERNAME,
    password: envVar.MONGO_INITDB_ROOT_PASSWORD,
    host: 'mongo',
};

const redisQueueConfig = {
    port: envVar.REDIS_PORT,
    auth: envVar.REDIS_PASSWORD,
    host: envVar.REDIS_HOST,
};

const devServer = {
    hostUri: 'http://localhost:3000'
};

mongoConfig.hostUri = `mongodb://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}`;

const config = {
    env: envVar.NODE_ENV,
    port: envVar.PORT || 3000,
    mongo: mongoConfig,
    jwt: {
        secret: envVar.JWT_SECRET || 'sdflaskdhglkashdglkasdhgfklasdfh',
    },
    isProduction,
    publicPath: isProduction ? '' : devServer.hostUri,
    redisQueueConfig,
};

module.exports = config;
