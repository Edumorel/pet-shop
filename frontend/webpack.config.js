const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rulesJS = {
	test: /\.jsx$/,
	loader: 'babel-loader',
	options: {
		presets: [
			[
				'@babel/preset-react',
				{
					runtime: 'automatic', //CLASSIC
				},
			],
		],
	},
}

const rules = [rulesJS]

module.exports = {
	entry: './src/main.jsx',
	output: { path: path.resolve(__dirname, 'build') },
	module: {
		rules,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	devServer: {
		port: 3000,
	},
}
