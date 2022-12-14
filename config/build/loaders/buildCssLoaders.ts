import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoaders = (isDev: boolean) => ({
	test: /\.s[ac]ss$/i,
	use: [
		isDev ? "style-loader" : MiniCssExtractPlugin.loader,
		{
			loader: "css-loader",
			options: {
				modules: {
					auto: (resPath: string) => resPath.includes(".module."),
					localIdentName: isDev ? "[local]__[hash:base64:8]" : "[hash:base64:8]",
					exportLocalsConvention: "camelCase",
				},
			},
		},
		"sass-loader",
	],
});
