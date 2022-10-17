import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { AppRouter } from "./providers/router";

export const App = () => {
	return (
		<>
			<Navbar />

			<div className="content">
				<Sidebar />

				<AppRouter />
			</div>
		</>
	);
};
