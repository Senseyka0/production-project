import { Route, Routes } from "react-router-dom";

import { routeConfig } from "../lib/route";

export const AppRouter = () => {
	return (
		<div className="page">
			<Routes>
				{Object.values(routeConfig).map((props) => (
					<Route key={props.path} element={props.element} {...props} />
				))}
			</Routes>
		</div>
	);
};
