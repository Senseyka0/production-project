import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildSvgLoaders, buildCssLoaders } from "./loaders";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff|woff2)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	};

	const svgLoader = buildSvgLoaders();

	const cssLoader = buildCssLoaders(isDev);

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /(node_modules)/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env"],
			},
		},
	};

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
