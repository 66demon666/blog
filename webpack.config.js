const path = require('path');
//const HtmlWebPlugin = require('html-webpack-plugin');
const CssExtractor = require('mini-css-extract-plugin');

module.exports = {
    target: "web",
    plugins: [
        new CssExtractor({
            filename:'./styles/styles.css'
        }),
    ],
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: "./js/scripts.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use:[
                    CssExtractor.loader,
                    "css-loader",
                    "sass-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    CssExtractor.loader,
                    "css-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
}