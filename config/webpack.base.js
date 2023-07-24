const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin}= require("clean-webpack-plugin");
const fs = require("fs");
// const pages = fs.readdirSync(path.resolve(__dirname,"../src/pages"));
const entrys = ['babel-polyfill','./src/main.js','./src/pages/index/index.js'];
// const entrys ={
//     main:"./src/main.js"
// };
// pages.map((item)=>{
//     entrys[item] = `./src/${item}/index.js`
// })
module.exports = {
    entry:{
        main:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,"../dist"),
        filename:"./js/[name].js"
    },
    // resolveLoader: {
    //     modules: ['node_modules', path.resolve(__dirname, '../loaders')],
    //   },
    module:{
        rules:[
            {
                test:/\.(png|jpg)$/,
                use:[{
                    loader:'file-loader',
                    options:"[name].[ext]"
                }  ]              
            },
            {
                test:/\.js$/,
                exclude:[ path.resolve(__dirname, '../ndoe_modules')],
                
                use:[
                    {
                        loader:"babel-loader"    
                    },
                    // {
                    //     loader: path.resolve(__dirname,"../loaders/test.js")
                    // }
                ],
                
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    // "sass-loader"
                ]  
            }
        ],
    },
  
    plugins:[
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: `./css/[name].css`
        // }),
        new HtmlWebpackPlugin({
            title:"template",
            filename:`index.html`,
            template:`./public/index.html`,
            chunks:['main'],
            inject: 'body'
        })
        
    ]


}