module.exports = {
    entry: './notes-app/front-end/main.js',
    output: {
        path: __dirname + 'notes-app/src/dist/',
        publicPath: 'dist/',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, /src/]
            }
        ]
    }
}
