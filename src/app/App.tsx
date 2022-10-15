import { useTheme } from "./providers/theme";

export const App = () => {
	const { toggleTheme } = useTheme();

	return (
		<div>
			<button onClick={toggleTheme}>Clock</button>App
		</div>
	);
};
