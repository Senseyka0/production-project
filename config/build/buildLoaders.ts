import webpack from "webpack";

import { BuildOptions } from "./types/config";
import { buildSvgLoaders, buildCssLoaders, buildBabelLoader } from "./loaders";

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

	const babelLoader = buildBabelLoader(isDev);

	return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
