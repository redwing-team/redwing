const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { cssLoaders, styleLoaders, assetsPath } = require('./utils')

const env = process.env.NODE_ENV || 'development'
const outputPath = path.join(__dirname, '../dist')

let devtool
let filename
let htmlMinify
const plugins = []

if (env === 'development') {
    filename = '[name].js'
    devtool = '#source-map'
    htmlMinify = false
} else {
    filename = assetsPath('js/[name].[chunkhash].js')
    devtool = '#eval-source-map'
    htmlMinify = {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true, // 折叠空白
        removeComments: true, // 删除注释
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        processConditionalComments: true // 保留条件注释
    }
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    )
}

const cssOptions = {
    sourceMap: true,
    extract: true
}

module.exports = {
    entry: {
        vendor: ['vue', 'vue-router'],
        main: './src/pages/main.js'
    },
    output: {
        filename,
        path: outputPath
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
                            name: assetsPath('images/[name][hash].[ext]')
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)(\?.*)?$/i,
                loader: 'url-loader',
                options: {
                    name: assetsPath('fonts/[name][hash].[ext]')
                }
            }
        ])
    },
    plugins: plugins.concat([
        new ExtractTextPlugin({
            filename: assetsPath('css/[name].[contenthash].css')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            chunks: ['vendor', 'main'],
            template: path.resolve(__dirname, '../src/template.html'),
            favicon: path.resolve(__dirname, '../src/favicon.ico'),
            minify: htmlMinify
        })
    ]),
    devtool,
    devServer: {
        disableHostCheck: true,
        contentBase: outputPath,
        stats: 'normal' // errors-only, minimal, none, normal, verbose
    }
}
