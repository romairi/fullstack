const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = env => {
    const devMode = !env || !env.NODE_ENV  || env.NODE_ENV !== 'production';

    return ({
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './build'),
            filename: `static/js/main${devMode ? '' : '.[hash]'}.js`,
            publicPath: devMode ? 'http://localhost:3000' : '/',
            chunkFilename: `static/js/chunk-[name]${devMode ? '' : '.[contenthash]'}.js`,
        },
        mode: devMode ? 'development' : 'production',
        devtool: 'cheap-source-map',
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
                                hmr: devMode,
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
                chunkFilename: `static/css/${devMode ? '[id].css' : 'chunk-[name].[id].[hash].css'}`,
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            publicPath: '/',
            compress: true,
            port: 3000,
            hot: true,
        }
    });
};
