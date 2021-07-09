const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'production',
    devtool: 'source-map',
    module:{
        rules: [
            {
              test:/\.html$/,
              loader: 'html-loader'
            },
            {
                test: /\.css$/,
                  use: [
                    {
                      // We configure 'MiniCssExtractPlugin'              
                      loader: MiniCssExtractPlugin.loader,
                    },
                    {
                      loader:'css-loader',
                      options:{
                        sourceMap: true
                      }
                    },
                    {
                      loader: 'postcss-loader'
                    }
                  ]
              },
              {
                test: /\.css$/i,
                use: ['style-loader', 
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
          new MiniCssExtractPlugin({
            filename: 'styles/styles.[chunkhash].css'
        })
      ]
};

module.exports = config;