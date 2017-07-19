var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');
module.exports = {
    context: path.join(__dirname, 'App'),
    entry: {
        server: './server',
        client: './client'
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'js'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
            },
            {
                test: /\.scss?$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:
                    combineLoaders([{
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[hash:base64:5]'
                        }
                    }, {
                        loader: 'sass-loader'
                    }
                    ])
                })
            },
            // Transform JSX in .jsx files
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
        ]
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['.js', '.jsx']
    },
    externals: {
        // Use external version of React (from CDN for client-side, or
        // bundled with ReactJS.NET for server-side)
        react: 'React'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '../css/dashboard.css',
            allChunks: true
        })
    ]
};
