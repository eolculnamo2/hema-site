const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
require('babel-register')({
    stage: 0
});

const browserConfig = {
    entry: './src/Index.js',
    output: {
        path: path.resolve('assets/dist/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                filename: 'vendors.js',
                chunks: 'all'
            },
            styles: {
              name: 'style',
              filename: 'style.js',
              test:  /\.s?css$/,
              chunks: 'all',
              enforce: true
            }
        }
    }
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        inline: true,
        port: 3000,
        publicPath: '/',
        proxy: {
            '/': 'http://127.0.0.1:8080/'
          }
      },
    plugins: [
              new CleanWebpackPlugin(['assets/dist/'], {exclude: 'sitemap.xml'}),
              new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "style.css",
                chunkFilename: "[name].css"
              })
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                  ],
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
            test: /\.(sa|sc|c)ss$/,
            loader: 'css-loader/locals'
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

//module.exports = browserConfig;
module.exports = [browserConfig, serverConfig];