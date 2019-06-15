const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.NODE_ENV == "development";

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: [
            "babel-polyfill",
            "./src/app/js/index.js"
        ]
    },
    output: {
        path: path.join(__dirname,"src/public"),
        filename: "js/bundle.js"
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
            template: "./src/app/index.html"
        }),

        new miniCssExtractPlugin({
            filename: "css/bundle.css"
        })
    ]
}
