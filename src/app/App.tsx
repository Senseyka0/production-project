import { Navbar } from "widgets/Navbar";

import { AppRouter } from "./providers/router";

export const App = () => {
	return (
		<>
			<Navbar />

			<AppRouter />
		</>
	);
};
