import webpack from "webpack";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	const { paths, mode } = options;

	const config: webpack.Configuration = {
		mode,
		entry: paths.entry,

		output: {
			filename: "[name].[contenthash].js",
			path: paths.build,
			clean: true,
		},

		plugins: buildPlugins(options),

		module: {
			rules: buildLoaders(),
		},

		resolve: buildResolvers(),

		devtool: "inline-source-map",
		devServer: buildDevServer(options),
	};

	return config;
};