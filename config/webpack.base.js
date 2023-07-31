const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
const fs = require("fs");
// const pages = fs.readdirSync(path.resolve(__dirname,"../src/pages"));
const entrys = ['babel-polyfill', './src/main.js', './src/pages/index/index.js'];
// const entrys ={
//     main:"./src/main.js"
// };
// pages.map((item)=>{
//     entrys[item] = `./src/${item}/index.js`
// })
module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "./js/[name]-[contentHash:8].js"
    },
    // resolveLoader: {
    //     modules: ['node_modules', path.resolve(__dirname, '../loaders')],
    //   },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
            "@":path.resolve(__dirname,"../src")
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'file-loader',
                    options: "[name].[ext]"
                }]
            },
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, '../ndoe_modules')],

                use: [
                    {
                        loader: "babel-loader"
                    },
                    // {
                    //     loader: path.resolve(__dirname,"../loaders/test.js")
                    // }
                ],

            },
            {
                test: /\.(sa|sc|c|le)ss$/,
                use: [
                    "css-loader",
                    "less-loader"
                ]
            }
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: `./css/[name].css`
        // }),
        new HtmlWebpackPlugin({
            title: "template",
            filename: `index.html`,
            template: `./public/index.html`,
            chunks: ['main'],
            inject: 'body'
        })

    ]


}