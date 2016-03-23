const plugin = require('cmify/plugin')
const autoprefixer = require('autoprefixer')
const nesting = require('postcss-nesting')
const color = require('postcss-color-function')

module.exports = function (b, opts) {
  opts = opts || {}

  opts.cssAfter = [
    nesting,
    color,
    autoprefixer
  ]

  plugin(b, opts)
}
