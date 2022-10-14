import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

import { BuildOptions } from "./types/config";

export const buildPlugins = ({ paths }: BuildOptions): webpack.WebpackPluginInstance[] => {
	return [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({ template: paths.html })];
};
