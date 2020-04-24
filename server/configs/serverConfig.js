const envVar = process.env;

const mongoConfig = {
    username: envVar.MONGO_INITDB_ROOT_USERNAME,
    password: envVar.MONGO_INITDB_ROOT_PASSWORD,
    host: 'mongo',
};

mongoConfig.hostUri = `mongodb://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}`;

const config = {
    env: envVar.NODE_ENV,
    port: envVar.PORT || 3000,
    mongo: mongoConfig
};

module.exports = config;