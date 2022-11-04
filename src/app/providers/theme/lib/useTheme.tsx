import { useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY } from "shared/constants/localStorage";
import { Theme, ThemeContext } from "./ThemeContext";

export const useTheme = (): useThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

		setTheme?.(newTheme);

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme: theme || Theme.LIGHT, toggleTheme };
};

interface useThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}
