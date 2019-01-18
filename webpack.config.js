const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: ['whatwg-fetch', './src/main.js'],
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    devtool:  "source-map",
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3001
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "index.html", to: "index.html" }
        ]),
        new webpack.DefinePlugin({
            'ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT)
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
