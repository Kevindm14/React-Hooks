const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLplugin = new HTMLWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
})

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [HTMLplugin]
}

