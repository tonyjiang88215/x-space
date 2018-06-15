import * as webpack from "webpack";
import * as path from "path";

import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: "./src/index",
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            inject: true
        }),
        // new CopyWebpackPlugin([
        //     { from: "src/assets", to: "assets" }
        // ])
    ],

    module: {
        rules: [
            {
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.scss$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }]
            },
            // {
            //     test: /\.less$/,
            //     use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "less-loader" }]
            // },
            {
                test: /\.(ttf|eot|svg|woff|png)\??.*$/,
                use: [{ loader: 'file-loader' }]
            },
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    devServer: {
        contentBase: './dist',
        port: 3722,
    }
}

module.exports = config;