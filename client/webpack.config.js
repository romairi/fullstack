const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const devMode = process.env.NODE_ENV !== 'production';
const devMode = true;

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: `static/js/main${devMode ? '' : '.[hash]'}.js`,
        publicPath: "<%- publicPath %>"
    },
    devtool: 'inline-source-map',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
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
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            // reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "../../server/views/index.ejs"
        }),
        new MiniCssExtractPlugin({
            filename: `static/css/${devMode ? '[name].css' : '[name].[hash].css'}`,
            chunkFilename: `static/css/${devMode ? '[id].css' : '[id].[hash].css'}`,
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        compress: true,
        port: 3000,
        hot: true,
    }
};
