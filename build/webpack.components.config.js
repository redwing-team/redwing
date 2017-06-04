const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { cssLoaders, styleLoaders, assetsPath } = require('./utils')

const cssOptions = {
    minimize: true,
    extract: true
}

module.exports = {
    entry: {
        redwing: './src/components/index.js'
    },
    output: {
        library: 'redwing',
        libraryTarget: 'commonjs2',
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: styleLoaders(cssOptions).concat([
            {
                test: /\.vue$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'vue-loader',
                        options: {
                            preserveWhitespace: true,
                            loaders: cssLoaders(cssOptions),
                            postcss: {
                                sourceMap: cssOptions && cssOptions.sourceMap
                            }
                        }
                    },
                    'eslint-loader'
                ]
            },
            {
                test: /\.js$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: assetsPath('images/[name].[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)(\?.*)?$/i,
                loader: 'url-loader',
                options: {
                    name: assetsPath('fonts/[name].[ext]')
                }
            }
        ])
    },
    plugins: [
        new ExtractTextPlugin({
            filename: assetsPath('[name].css')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
