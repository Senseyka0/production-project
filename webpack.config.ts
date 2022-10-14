import path from "path";

import { buildWebpackConfig } from "./config/build";

const paths = {
	html: path.resolve(__dirname, "public", "index.html"),
	entry: path.resolve(__dirname, "src", "index.ts"),
	build: path.resolve(__dirname, "dist"),
};

export default () => {
	const mode = "development";
	const isDev = mode === "development";
	const port = 3000;

	const config = buildWebpackConfig({
		mode: mode,
		paths,
		isDev,
		port,
	});

	return config;
};
