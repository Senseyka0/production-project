import path from "path";

import { buildWebpackConfig, BuildEnv } from "./config/build";

const config = (env: BuildEnv) => {
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const port = env.port || 3000;
	const apiUrl = env.apiUrl || "http://localhost:8000";

	const paths = {
		html: path.resolve(__dirname, "public", "index.html"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "dist"),
		src: path.resolve(__dirname, "src"),
	};

	const config = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
		apiUrl,
	});

	return config;
};

export default config;
