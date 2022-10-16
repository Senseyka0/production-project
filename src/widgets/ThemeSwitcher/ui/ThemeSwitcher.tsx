import { useTheme } from "app/providers/theme";
import { Language } from "shared/assets/icons";
import { classNames } from "shared/libs/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";

import cls from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = ({ className }: Props) => {
	const { toggleTheme } = useTheme();

	return (
		<Button
			className={classNames(cls.wrapper, {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.TEXT}>
			<Language width={26} fill="var(--primary-color)" />
		</Button>
	);
};

interface Props {
	className?: string;
}
