import { RouteProps } from "react-router-dom";

import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";

export type AppRouterProps = RouteProps & {
	requiredAuth?: boolean;
};

export enum Routes {
	HOME = "/",
	ABOUT = "/about",
	PROFILE = "/profile",
	ARTICLES = "/articles",
	ARTICLE_DETAILS = "/articles/", // + :id
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
	[Routes.ARTICLES]: {
		path: Routes.ARTICLES,
		element: <ArticlesPage />,
		requiredAuth: true,
	},
	[Routes.ARTICLE_DETAILS]: {
		path: `${Routes.ARTICLE_DETAILS}:id`,
		element: <ArticleDetailsPage />,
		requiredAuth: true,
	},
	[Routes.NOT_FOUND]: {
		path: "*",
		element: <NotFoundPage />,
	},
};
