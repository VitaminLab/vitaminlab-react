const path = require('path');

// postcss
const cssnext = require('postcss-cssnext');
const postcssPartialImport = require('postcss-partial-import');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');

const PATHS = require('../paths');

module.exports = {
  resolve: {
    root: [
      PATHS.app,
      path.resolve(__dirname, '../node_modules'),
    ],
  },

  module: {
    loaders: [
      {
        test: /\.(png|woff|woff2|svg|ttf|eot|jpg)$/,
        loader: 'file',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules=1!postcss',
      },
    ],
  },

  postcss(instance) {
    return [
      postcssPartialImport({
        dirs: [
          PATHS.app,
        ],
        addDependencyTo: instance,
      }),
      postcssMixins(),
      postcssSimpleVars(),
      cssnext(),
    ];
  },
};