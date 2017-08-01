const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = _path => path.posix.join(_path)

exports.cssLoaders = (options = {}, addPostcss) => {
    const sourceMap = options.sourceMap
    const minimize = options.minimize
    const styleLoader = 'vue-style-loader'

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize,
            sourceMap
        }
    }

    function generateLoaders(loader, loaderOptions) {
        const loaders = [cssLoader]
        // 兼容 postcss-px2rem
        if (addPostcss && loader && loader !== 'css') {
            loaders.push({
                loader: 'postcss-loader',
                options: {
                    sourceMap
                }
            })
        }

        if (loader) {
            loaders.push({
                loader: `${loader}-loader`,
                options: Object.assign({}, loaderOptions, {
                    sourceMap
                })
            })
        }

        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: styleLoader
            })
        }

        return [styleLoader].concat(loaders)
    }

    return {
        css: generateLoaders(),
        less: generateLoaders('less')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = options => {
    const loaders = exports.cssLoaders(options, true)

    return Object.keys(loaders).map(item => {
        const loader = loaders[item]
        return {
            test: new RegExp(`\\.${item}$`),
            use: loader
        }
    })
}
