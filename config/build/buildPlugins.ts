import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import { BuildOptions } from "./types/config";

export const buildPlugins = ({
	paths,
	isDev,
	apiUrl,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
	const plugins = [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: paths.html }),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
		}),
	];

	if (isDev) {
		// 	plugins.push(
		// 		new BundleAnalyzerPlugin({
		// 			openAnalyzer: false,
		// 		})
		// 	);
		// 	// isDev && new ReactRefreshWebpackPlugin(),
		// 	// isDev && new webpack.HotModuleReplacementPlugin(),
	}

	return plugins;
};
