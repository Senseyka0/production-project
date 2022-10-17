import { useTheme } from "app/providers/theme";
import { Theme } from "app/providers/theme/lib/ThemeContext";
import { Moon, Sun } from "shared/assets/icons";
import { classNames } from "shared/libs/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";

import cls from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = ({ className }: Props) => {
	const { toggleTheme, theme } = useTheme();

	return (
		<Button
			className={classNames(cls.wrapper, {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.ICON}>
			{theme === Theme.DARK ? (
				<Sun width={30} fill="var(--primary-color)" />
			) : (
				<Moon width={30} fill="var(--primary-color)" />
			)}
		</Button>
	);
};

interface Props {
	className?: string;
}
