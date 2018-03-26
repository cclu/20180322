const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_DEV === "development"

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 1024,
                        name: '[name]-2018.[ext]'
                    }
                }]
            }
        ]
    },
    // process.env.NODE_ENV = "development"
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_DEV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if (isDev) {
    //开发环境
    config.module.rules.push({
        test: /.styl$/,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap: true,
                }
            },
            "stylus-loader"
        ]
    })
    config.devtool = '#cheap-module-eval-source-map'
    config.devSever = {
        port: '8080',
        host: '0.0.0.0',
        overlay: {
            error: true
        },
        hot: true,
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = {
        app: path.join(__dirname, 'src/index.js'),
        vendor: ['vue']
    }
    config.output.filename = '[name].[chunkhash:8].js'
    config.module.rules.push({
        test: /.styl$/,
        use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use: [
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                "stylus-loader"
            ]
        })
    })
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // }),
    )
    
}

module.exports = config;
