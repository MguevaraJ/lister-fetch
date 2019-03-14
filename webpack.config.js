const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.NODE_ENV == "development"; 

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: [
            "babel-polyfill",
            "./front-end/js/index.js"
        ]
    },
    output: {
        path: path.join(__dirname,"src/public"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MODE ? "style-loader" : miniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {   
                enforce: "pre",
                test: /\.js$/,
                use: [
                    {
                        loader: "eslint-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: "./front-end/index.html"
        }),

        new miniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}