import { createContext } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
	ORANGE = "orange",
}

export interface Props {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<Props>({});
