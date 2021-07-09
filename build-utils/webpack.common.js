const commonPath = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: `${commonPath.appEntry}/index.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'public/blogs.html',
            filename: 'blogs.html'
        })
    ],
    module: {

        rules: [
            {
                test:/\.js/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[contenthash][ext][query]'
                }

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash][ext][query]'
                }
            },
            {
                test: /\.typeface.json$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[contenthash][ext][query]'
                }
            },
        ],
    },

    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};

module.exports = config;

