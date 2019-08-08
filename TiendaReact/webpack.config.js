const path = require('path');

var config= {
    entry: './main.js',
    output: {
        path : path.resolve(__dirname, './'),
        filename : 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080
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

