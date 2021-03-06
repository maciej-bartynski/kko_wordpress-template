var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: {
        index: ["@babel/polyfill", "./src/index.js"],
        oferta: ["@babel/polyfill", "./src/pages/oferta/oferta.js"],
        portfolio: ["@babel/polyfill", "./src/pages/portfolio/portfolio.js"],
        idea: ["@babel/polyfill", "./src/pages/idea/idea.js"],
        kontakt: ["@babel/polyfill", "./src/pages/kontakt/kontakt.js"],
        portfoliopost: ["@babel/polyfill", "./src/pages/portfolio-post/portfolio-post.js"]
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
                    use: ['css-loader', 'postcss-loader', 'sass-loader'
                    ]
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
            template: "./src/pages/oferta/oferta.html",
            filename: "oferta.html",
            chunks: ["oferta"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/idea/idea.html",
            filename: "idea.html",
            chunks: ["idea"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/portfolio/portfolio.html",
            filename: "portfolio.html",
            chunks: ["portfolio"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/kontakt/kontakt.html",
            filename: "kontakt.html",
            chunks: ["kontakt"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/pages/portfolio-post/portfolio-post.html",
            filename: "portfolio-post.html",
            chunks: ["portfoliopost"],
        })
    ]
}