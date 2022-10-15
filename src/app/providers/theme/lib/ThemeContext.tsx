import { createContext } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export interface Props {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({});
