const env = process.env.NODE_ENV;

const appConfig = {
    script: 'index.js',
};

if (env !== 'production') {
    appConfig.watch = '.';
}

const baseConfig = {
    apps: [appConfig],
};

module.exports = baseConfig;