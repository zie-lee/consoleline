const path = require('path')

module.exports = {
    entry:  './src/index.ts',
    target: ['web', 'es5'],
    watch: true,
    mode: 'production',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: 'consoleline.js',
        library: {
            name: 'Consoleline',
            type: 'umd',
            umdNamedDefine: true,
            export: 'default',
        }
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json')
                        }
                    }
                ]
            }
        ]
    }
}