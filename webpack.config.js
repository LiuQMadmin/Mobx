const path=require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports={
    // 环境
    mode:"development",

    // 打包的入口  
    entry:"./src/index.js",

    // 打包出口配置
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"./dev")
    },
    // 配置的webserver，./是共享那个文件夹
    devServer:{
        contentBase:path.join(__dirname,"./dev"),
        compress:true,
        port:9000
    },

    // 配置插件
    // 这恶配置完成之后，在dev文件夹里面不会看到index.html这个文件，他会默认的寻找源文件路径的index.html
    // 并且把你默认打包的js和css文件自动关联上去
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',    //目标文件名字
            template: './index.html'   //源文件的路径
          })
    ],
    // 配置url-loader，安装url-loader必须安装file-loader,
    // url-loader比file-loader更强，
    // yarn add url-loader,file-loader
    module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
              }
            ]
          },
          {
            test: /\.(m?js)|(jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: [
                  '@babel/plugin-transform-runtime',
                  ["@babel/plugin-proposal-decorators", { "legacy": true }],
                  ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ]
              }
            }
          }
        ]
      }
}