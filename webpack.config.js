const path = require('path')
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'browser.ts'),
    output: {
        library: {
            root: 'SafeJsonType',
            amd: 'safe-json-type',
            commonjs: 'safe-json-type'
        },
        libraryTarget: 'umd',
        path: path.join(__dirname, 'dist'),
        filename: 'browser.min.js'
    },
    node: {
        // do not polyfill Buffer
        Buffer: false,
        stream: false,
        process: false,
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader', // 配置加载typescript
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        // 路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        // 路径别名自动解析确定的扩展
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}