import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "widgets/PageLoader";

import { AppRouterProps, routeConfig } from "../lib/route";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRouterProps) => {
		return (
			<Route
				{...route}
				key={route.path}
				element={
					<Suspense fallback={<PageLoader />}>
						{route.requiredAuth ? (
							<PrivateRoute>
								<>{route.element}</>
							</PrivateRoute>
						) : (
							route.element
						)}
					</Suspense>
				}
			/>
		);
	}, []);

	return (
		<div className="page">
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</div>
	);
};
