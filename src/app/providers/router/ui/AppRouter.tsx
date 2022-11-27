import { getUserIsAuth } from "entities/user";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { routeConfig } from "../lib/route";

export const AppRouter = () => {
	const isAuth = useSelector(getUserIsAuth);

	const routes = useMemo(
		() =>
			Object.values(routeConfig).filter((route) => {
				if (route.authOnly && !isAuth) {
					return false;
				}

				return true;
			}),
		[isAuth]
	);

	return (
		<div className="page">
			<Routes>
				{routes.map((props) => (
					<Route key={props.path} element={props.element} {...props} />
				))}
			</Routes>
		</div>
	);
};
