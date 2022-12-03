import { useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { AppRouterProps, routeConfig } from "../lib/route";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRouterProps) => {
		return (
			<Route
				key={route.path}
				element={
					route.requiredAuth ? (
						<PrivateRoute>
							<>{route.element}</>
						</PrivateRoute>
					) : (
						route.element
					)
				}
				{...route}
			/>
		);
	}, []);

	return (
		<div className="page">
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</div>
	);
};
