import { addDecorator } from "@storybook/react";

import {
	RouteDecorator,
	StyleDecorator,
	TranslationDecorator,
} from "../../src/shared/config/storybook";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	themes: {
		target: "html",
		default: "light",
		list: [
			{ name: "light", class: "global-light-theme", color: "#f7fafc" },
			{ name: "dark", class: "global-dark-theme", color: "#1a202c" },
		],
	},
};

addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
addDecorator(TranslationDecorator);
