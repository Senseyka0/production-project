import { Suspense } from "react";

import { classNames } from "shared/libs/classNames";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "./providers/router";

export const App = () => {
	return (
		<div className={classNames("app")}>
			<Suspense fallback="loading">
				<Navbar />

				<div className="content">
					<Sidebar />

					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
