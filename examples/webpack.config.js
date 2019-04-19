const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/entries/app.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: '127.0.0.1'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        })
    ]
};
