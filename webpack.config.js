module.exports = {
    entry: {
        'app': './src/js/app.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
}

}