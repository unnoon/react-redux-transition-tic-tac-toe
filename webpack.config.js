path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/main.tsx'),
    output: {
        filename: 'bin/bundle.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader"   },
                    { loader: "sass-loader"  },
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules\/normalize\.css/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    { loader: 'file-loader', options: {outputPath: './bin/rsc/img/'}}
                ]
            }
        ]
    },
    devtool: "source-map"
};