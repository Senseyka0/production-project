import path from "path";
import webpack, { RuleSetRule } from "webpack";

import { buildSvgLoaders, buildCssLoaders } from "../build/loaders";

import { BuildPaths } from "../build/types/config";

interface Props {
	config: webpack.Configuration;
}

export default ({ config }: Props) => {
	const paths: BuildPaths = {
		build: "",
		html: "",
		entry: "",
		src: path.resolve(__dirname, "..", "..", "src"),
	};

	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push(".ts", ".tsx");

	const rules = config.module?.rules as RuleSetRule[];
	(config.module || {}).rules = rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.module?.rules?.push(buildSvgLoaders());
	config.module?.rules?.push(buildCssLoaders(true));

	config.plugins?.push(new webpack.DefinePlugin({ IS_DEV: true }));

	return config;
};
