var path = require('path')

module.exports = {
    entry: './src/Index.js',
    output: {
        path: path.resolve('./assets/dist'),
        filename: '[name].[chunkhash].bundle.js'
    },
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env','react']
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