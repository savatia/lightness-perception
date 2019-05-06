const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const path = require('path');

const ENV = process.env.NODE_ENV
const DIST_DIR = path.resolve(__dirname, 'dist')
const SRC_DIR = path.resolve(__dirname, 'src/')

let common = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: DIST_DIR,
    },
    resolve: {
        alias: {
            Src: SRC_DIR,
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    }
};

let dev = {
    mode: 'development',
    devtool: "eval-source-map",
    devServer: {
        contentBase: DIST_DIR
    }
};


let prod = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin([DIST_DIR])
    ],
};

module.exports =(env, argv) => {
    console.log(`The MODE is ${argv.mode}`)
    switch (argv.mode){
        case 'production': return WebpackMerge(common, prod);
        default: return WebpackMerge(common, dev);
    }
};