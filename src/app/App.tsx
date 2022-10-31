import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

import { userActions } from "entities/user";
import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader";
import { Sidebar } from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames";

import { AppRouter } from "./providers/router";

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames("app")}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />

				<div className="content">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
