module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: '/'
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }       
        ]
    },
    devtool: 'eval',
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    }
}