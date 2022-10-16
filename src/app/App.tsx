import { Navbar } from "widgets/Navbar";

import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/theme";

export const App = () => {
	const { toggleTheme } = useTheme();

	return (
		<div onClick={toggleTheme}>
			<Navbar />

			<AppRouter />
		</div>
	);
};
