import { Route, Routes } from "react-router-dom";

import { routeConfig } from "../lib/route";

export const AppRouter = () => {
	return (
		<Routes>
			{Object.values(routeConfig).map((props) => (
				<Route key={props.path} {...props} />
			))}
		</Routes>
	);
};
