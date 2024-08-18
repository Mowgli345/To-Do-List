const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');
const path = require('path');

module.exports = {
 mode: 'development',
 devtool: 'inline-source-map',
 optimization: {
    runtimeChunk: 'single'
    },
 resolve: { 
   extensions: ['.ts','.js']
      } ,
  module: {
    rules: [
     { test: /\.ts$/ ,  
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
       },
       {test: /\.css$/i,
       use: ['style-loader','css-loader'],
          } ,
        {test: /\.(woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename:'fonts/[name][ext]'
            }
                } ,
        {test: /\.( png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',   
        generator: {
            filename:'img/[name][ext]'
        }
            },
    ]   },
  entry: {
    index: './src/index.ts',
    scripts: './src/scripts.ts',

        },

  output: {
    filename: '[name].bundle.js',

    path: path.resolve ( __dirname, 'docs' ),  
    // assetModuleFilename:'assets/[name][ext]',
    publicPath: 'auto',
    },
    plugins: [
        new HtmlWebpackPlugin({
           title:'Hello',
            template:'src/index.html',
        })
    ],
    output: {
        clean:true,
    },
    devServer: {
        static:'docs',
    },
    devtool: 'inline-source-map',
}