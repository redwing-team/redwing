module.exports = () => ({
    plugins: {
        'postcss-px2rem': {
            remUnit: 75
        },
        autoprefixer: {
            browsers: ['ie >= 9', '> 5% in CN', 'last 3 versions']
        }
    }
})
