const path = require("path");
const {merge} = require("webpack-merge")
const base = require("./webpack.base.js")
module.exports = merge(base,{
    mode:"development",
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"127.0.0.1",
        compress:true,
        port:8090
    },
})