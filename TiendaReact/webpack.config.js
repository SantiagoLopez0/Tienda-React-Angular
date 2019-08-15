const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config= {
    entry: './src/App/main.js',
    output: {
        path : path.resolve(__dirname, './src/Public/js'),
        filename : 'index.js',
    },
    devServer: {
        //inline: true,
        //port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
             }
          }
        ]
   }

};

module.exports = config;
