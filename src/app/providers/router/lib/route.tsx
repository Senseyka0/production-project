import { RouteProps } from "react-router-dom";

import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";

export enum Routes {
	HOME = "/",
	ABOUT = "/about",
}

export const routeConfig: Record<Routes, RouteProps> = {
	[Routes.HOME]: {
		path: Routes.HOME,
		element: <HomePage />,
	},
	[Routes.ABOUT]: {
		path: Routes.ABOUT,
		element: <AboutPage />,
	},
};
