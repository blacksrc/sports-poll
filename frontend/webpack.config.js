const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

module.exports = {
	entry: {
		index: "./src/index.js"
	},
	output: {
		path: path.join(__dirname, "./build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [{ loader: "html-loader" }]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader"
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
					{
						loader: "sass-resources-loader",
						options: {
							resources: [
								path.resolve(
									__dirname,
									"./src/app/assets/stylesheets/variables.scss"
								),
								path.resolve(
									__dirname,
									"./src/app/assets/stylesheets/mixins.scss"
								)
							]
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin(envKeys),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	],
	node: {
		fs: "empty"
	}
};
