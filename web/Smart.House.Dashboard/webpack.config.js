"use strict";

let isDevBuild = process.argv.indexOf('--env.prod') < 0;
let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let nodeExternals = require('webpack-node-externals');
let merge = require('webpack-merge');
let allFilenamesExceptJavaScript = /\.(?!js(\?|$))([^.]+(\?|$))/;
let extractCSS = new ExtractTextPlugin('site.css');
let CompressionPlugin = require("compression-webpack-plugin");
let LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var sharedConfig = () => ({
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        filename: '[name].js',
        publicPath: '/wwwroot/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
    },
    module: {
        rules: [
            { test: /\.tsx?$/, include: /App/, use: 'babel-loader' },
            { test: /\.tsx?$/, include: /App/, use: { loader: 'awesome-typescript-loader', options: { silent: true } } }
        ]
    }
});

var clientBundleOutputDir = './wwwroot';
var clientBundleConfig = merge(sharedConfig(), {
    entry:
    {
        'main-client': [
            './App/boot-client.tsx'
        ],
        vendor: [
            'babel-polyfill',
            'event-source-polyfill',
            'domain-task',
            'react',
            'react-dom',
            'react-router',
            'redux',
            'redux-thunk',
            'react-router-redux',
            'react-bootstrap',
            'core-js',
            'core-decorators'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 25000 }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?|$)/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 25000 } //?limit=100000'
                }
            }

        ]
    },
    performance: {
        hints: isDevBuild ? false : "warning"
    },
    output: {
        path: path.join(__dirname, clientBundleOutputDir)
    },
    plugins: [
        new LodashModuleReplacementPlugin,
        extractCSS,
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            minChunks: Infinity
        })
    ].concat(isDevBuild ? [
        // Plugins that apply in development builds only 
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative(clientBundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        })
    ] : [
            // Plugins that apply in production builds only
            new webpack.optimize.OccurrenceOrderPlugin(), // included by default in 2.1
            // new webpack.NoEmitOnErrorsPlugin(),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new LodashModuleReplacementPlugin(),
            new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$/,
                threshold: 10240,
                minRatio: 0.8
            })
        ])
});

var serverBundleConfig = merge(sharedConfig(), {
    entry: { 'main-server': ['babel-polyfill', './App/boot-server.tsx'] },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, './App/dist')
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: {
                    loader: 'raw-loader'
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 25000 } //?limit=100000'
                }
            }
        ]
    },
    target: 'node',
    devtool: 'inline-source-map',
    externals: [nodeExternals({ whitelist: [allFilenamesExceptJavaScript] })] // Don't bundle .js files from node_modules
});

module.exports = [clientBundleConfig, serverBundleConfig];


//module.exports = {
//    context: path.join(__dirname, 'App'),
//    entry: {
//        server: './server',
//        client: './client'
//    },
//    output: {
//        path: path.join(__dirname, 'wwwroot', 'js'),
//        filename: '[name].bundle.js'
//    },
//    module: {
//        loaders: [
//            {
//                test: /\.css$/,
//                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
//            },
//            {
//                test: /\.scss?$/,
//                loader: ExtractTextPlugin.extract({
//                    fallback: 'style-loader',
//                    use:
//                    combineLoaders([{
//                        loader: 'css-loader',
//                        query: {
//                            modules: true,
//                            localIdentName: '[hash:base64:5]'
//                        }
//                    }, {
//                        loader: 'sass-loader'
//                    }
//                    ])
//                })
//            },
//            // Transform JSX in .jsx files
//            { test: /\.jsx$/, loader: 'babel-loader' }
//        ]
//    },
//    resolve: {
//        // Allow require('./blah') to require blah.jsx
//        extensions: ['.js', '.jsx']
//    },
//    externals: {
//        // Use external version of React (from CDN for client-side, or
//        // bundled with ReactJS.NET for server-side)
//        react: 'React'
//    },
//    plugins: [
//        new ExtractTextPlugin({
//            filename: '../css/dashboard.css',
//            allChunks: true
//        })
//    ]
//};
