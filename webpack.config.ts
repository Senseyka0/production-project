import path from "path";

import { buildWebpackConfig, BuildEnv } from "./config/build";

export default (env: BuildEnv) => {
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const port = env.port || 3000;

	const paths = {
		html: path.resolve(__dirname, "public", "index.html"),
		entry: path.resolve(__dirname, "src", "index.ts"),
		build: path.resolve(__dirname, "dist"),
	};

	const config = buildWebpackConfig({
		mode: mode,
		paths,
		isDev,
		port,
	});

	return config;
};
