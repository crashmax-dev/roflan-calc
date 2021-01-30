const path = require('path')
const outputPath = path.resolve(__dirname, 'dist')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    target: 'web',
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        path: outputPath,
        filename: 'roflan-calc.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    devServer: {
        https: true,
        port: 8080,
        writeToDisk: true,
        contentBase: outputPath
    },
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}