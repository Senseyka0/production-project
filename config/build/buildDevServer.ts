import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import openBrowser from "react-dev-utils/openBrowser";

import { BuildOptions } from "./types/config";

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => {
	return {
		port,
		// historyApiFallback: true,
		// hot: true,
		// onAfterSetupMiddleware: () => {
		// 	openBrowser(`http://localhost:${port}`);
		// },
	};
};
