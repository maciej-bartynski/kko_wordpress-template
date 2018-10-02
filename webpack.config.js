var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: {
        index: ["@babel/polyfill", "./src/index.js"],
        oferta: ["@babel/polyfill", "./src/oferta.js"],
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
        //publicPath: '/build'
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
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'media/',
                        publicPath: 'media/'
                    }
                }]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ["index"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/oferta.html",
            filename: "oferta.html",
            chunks: ["oferta"],
        })
    ]
}