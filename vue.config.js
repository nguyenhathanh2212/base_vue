module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': __dirname + '/src',
                '@components': __dirname + '/src/components',
                '@assets': __dirname + '/src/assets',
            },
        }
    }
}
