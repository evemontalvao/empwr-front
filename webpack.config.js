const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
	entry: [
	'./src/empwr.jsx'
	],
	mode: 'development',
	output: {
		path: `${__dirname}/public`,
		filename: `./app.js`
	},
	devServer: {
		port: 2107,
		contentBase: `./public`,
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			modules: `${__dirname}/node_modules`
		}
	},
	module: {
		rules: [
		{
			test: /.js[x]?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-object-rest-spread']
			}
		},
		{
			test: /\.css$|\.scss/,
			use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader'
			})),
		}
		]
	}
}