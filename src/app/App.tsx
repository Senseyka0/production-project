import { Suspense } from "react";

import { classNames } from "shared/lib/classNames";
import { Navbar } from "widgets/Navbar";
import { PageLoader } from "widgets/PageLoader";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "./providers/router";

export const App = () => {
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
