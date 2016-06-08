var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + "/build",
        filename: 'bundle.js'
    },
    devtool:  "source-map",
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        port: 3001
    },
    plugins: [
        new webpack.DefinePlugin({
            'ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT)
        })
    ]
};
