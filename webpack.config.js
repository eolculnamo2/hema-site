const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
require('babel-register')({
    stage: 0
});

const browserConfig = {
    entry: './src/Index.js',
    output: {
        path: path.resolve('./assets/dist'),
        filename: 'bundle.js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    plugins: [
              new CleanWebpackPlugin(['assets/dist'], {exclude: 'sitemap.xml'})
            ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
                
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}

const serverConfig = {
    entry: "./server.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "index.js",
      libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
            
        },
        {
            test: /\.scss$/,
            loader: 'css-loader!sass-loader'
        },
        {
          test: /js$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: { presets: ['@babel/preset-env','@babel/preset-react'] }
        }
      ]
    }
  };

module.exports = [browserConfig, serverConfig];