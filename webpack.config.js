const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'browser.ts'),
    // target:'',
    output: {
        library: {
            root: 'SafeJsonType',
            amd: 'safe-json-type',
            commonjs: 'safe-json-type'
        },
        libraryTarget: 'umd',
        libraryExport: '',
        path: path.join(__dirname, 'dist'),
        filename: 'browser.min.js'
    },
    plugins: [
        // 官方文档推荐使用下面的插件确保 NODE_ENV
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        // 启动 minify
        new webpack.LoaderOptionsPlugin({ minimize: true }),
        new UglifyJSPlugin({//压缩JS
            exclude: /\.min\.js$/, // 过滤掉以".min.js"结尾的文件，我们认为这个后缀本身就是已经压缩好的代码，没必要进行二次压缩
            cache: true,
            parallel: true, // 开启并行压缩，充分利用cpu
            sourceMap: false,
            extractComments: false, // 移除注释
            uglifyOptions: {
                compress: {
                    //warnings: false,
                    drop_debugger: true,
                    drop_console: true
                },
                output: {
                    comments: false,// 移除注释
                }
            }
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',//配置加载typescript
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        //路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        //路径别名自动解析确定的扩展
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}