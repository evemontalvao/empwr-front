var postCSSConfig = [
require('autoprefixer'),
require('postcss-initial')({
  reset: 'inherited' // reset only inherited rules
}),
require('postcss-import'),
require('postcss-mixins')({
	mixins: require('../src/mixins')
}),
require('postcss-nested'),
require('postcss-simple-vars')({
	variables: function variables() {
		return require('../src/variables')
	},
	unknown: function unknown(node, name, result) {
		node.warn(result, 'Unknown variable ' + name)
	}
}),
require('postcss-math'),
require('postcss-color-function')
]

module.exports = postCSSConfig;