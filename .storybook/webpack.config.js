const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  module: {
    loaders: [{ test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/, loader: 'imports?jQuery=jquery' }],
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],

        include: path.resolve(__dirname, '../')
      }, 
      
    ]
  }, 
  plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Tether: "tether",
        "window.Tether": "tether",
        Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
        Button: "exports-loader?Button!bootstrap/js/dist/button",
        Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
        Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
        Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
        Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
        Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
        Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
        Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
        Util: "exports-loader?Util!bootstrap/js/dist/util",
      })
    ],
}