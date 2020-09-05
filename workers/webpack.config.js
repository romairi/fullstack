const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    target: 'node',
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, './build'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ],
    },
    externals: [nodeExternals()]
};
