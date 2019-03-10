const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./front-end/js/index.js",
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
                        loader: miniCssExtractPlugin.loader,
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
            template: "./front-end/index.html"
        }),

        new miniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
}