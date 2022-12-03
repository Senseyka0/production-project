import { RouteProps } from "react-router-dom";

import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

export type AppRouterProps = RouteProps & {
	requiredAuth?: boolean;
};

export enum Routes {
	HOME = "/",
	ABOUT = "/about",
	PROFILE = "/profile",
	NOT_FOUND = "/not-found",
}

export const routeConfig: Record<Routes, AppRouterProps> = {
	[Routes.HOME]: {
		path: Routes.HOME,
		element: <HomePage />,
	},
	[Routes.ABOUT]: {
		path: Routes.ABOUT,
		element: <AboutPage />,
	},
	[Routes.PROFILE]: {
		path: Routes.PROFILE,
		element: <ProfilePage />,
		requiredAuth: true,
	},
	[Routes.NOT_FOUND]: {
		path: "*",
		element: <NotFoundPage />,
	},
};
