import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getUserIsAuth } from "entities/user";

import { Routes } from "../lib/route";

export const PrivateRoute = ({ children }: Props) => {
	const location = useLocation();

	const isAuth = useSelector(getUserIsAuth);

	if (!isAuth) {
		return <Navigate to={Routes.HOME} state={{ from: location }} replace />;
	}

	return children;
};

interface Props {
	children: JSX.Element;
}
