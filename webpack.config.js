var path = require("path");

var config = {
	entry: {
		'javascripts' : './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/build/",
		filename: 'bundle-[name].js'
	},
	devServer: {
		inline: true,
		port: 8081,
		historyApiFallback: {
			index: './'
		}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
        ]
	}
}

module.exports = config;