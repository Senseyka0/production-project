import { ReactNode, useEffect, useMemo, useState } from "react";

import { Theme, ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "shared/constants/localStorage";

const defaultValue = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children, initialTheme }: Props) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || defaultValue);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

interface Props {
	children: ReactNode;
	initialTheme?: Theme;
}
